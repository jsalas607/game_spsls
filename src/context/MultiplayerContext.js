'use client'
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { db } from '@/src/lib/firebase';
import { ref, set, get, onValue, update, remove, onDisconnect } from 'firebase/database';
import { useUserName } from '@/src/context/UserNameContext';

const MultiplayerContext = createContext();

// Reglas del juego (igual que en single player)
const REGLAS_VICTORIA = {
  roca:    ['tijera', 'lagarto'],
  papel:   ['roca',   'spock'],
  tijera:  ['papel',  'lagarto'],
  lagarto: ['spock',  'papel'],
  spock:   ['tijera', 'roca'],
};

// Genera un código de sala de 6 caracteres
const generarCodigo = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

export const MultiplayerProvider = ({ children }) => {
  const { setScreen } = useUserName();

  const [codigoSala, setCodigoSala]     = useState(null);
  const [rolJugador, setRolJugador]     = useState(null);   // 'jugador1' | 'jugador2'
  const [datosSala, setDatosSala]       = useState(null);   // datos en tiempo real de Firebase
  const [screenMulti, setScreenMulti]   = useState('lobby'); // 'lobby' | 'espera' | 'juego'
  const [errorSala, setErrorSala]       = useState(null);
  const [cargando, setCargando]         = useState(false);
  const [resultadoRonda, setResultadoRonda] = useState(null);

  // ─── Escucha cambios en tiempo real de la sala ───────────────────
  useEffect(() => {
    if (!codigoSala) return;

    const salaRef = ref(db, `salas/${codigoSala}`);
    const unsub = onValue(salaRef, (snapshot) => {
      const datos = snapshot.val();
      if (!datos) {
        // La sala fue eliminada (el otro jugador abandonó)
        abandonarSala();
        return;
      }
      setDatosSala(datos);

      // Si el jugador 2 se unió, pasar a pantalla de juego
      if (datos.jugador2?.nombre && screenMulti === 'espera') {
        setScreenMulti('juego');
      }
    });

    return () => unsub();
  }, [codigoSala, screenMulti]);

  // ─── Detecta cuando ambos eligieron y calcula resultado ──────────
  useEffect(() => {
    if (!datosSala || !rolJugador) return;

    const j1 = datosSala.jugador1;
    const j2 = datosSala.jugador2;

    if (!j1?.mano || !j2?.mano) return; // aún no eligieron los dos

    // Calcula el resultado
    const manoJ1 = j1.mano;
    const manoJ2 = j2.mano;
    let resultado;

    if (manoJ1 === manoJ2) {
      resultado = 'empate';
    } else if (REGLAS_VICTORIA[manoJ1].includes(manoJ2)) {
      resultado = 'jugador1';
    } else {
      resultado = 'jugador2';
    }

    setResultadoRonda(resultado);

    // Solo jugador1 escribe los puntajes (evita doble escritura)
    if (rolJugador === 'jugador1') {
      const nuevasVictorias = {
        victorias1: resultado === 'jugador1' ? (datosSala.victorias1 || 0) + 1 : (datosSala.victorias1 || 0),
        victorias2: resultado === 'jugador2' ? (datosSala.victorias2 || 0) + 1 : (datosSala.victorias2 || 0),
      };

      const totalRondas = datosSala.totalRondas;
      const hayGanador = nuevasVictorias.victorias1 >= totalRondas || nuevasVictorias.victorias2 >= totalRondas;

      update(ref(db, `salas/${codigoSala}`), {
        ...nuevasVictorias,
        estado: hayGanador ? 'finJuego' : 'jugando',
      });

      // Después de 2.5s, limpiar manos para la siguiente ronda
      if (!hayGanador) {
        setTimeout(() => {
          update(ref(db, `salas/${codigoSala}`), {
            'jugador1/mano': null,
            'jugador2/mano': null,
          });
          setResultadoRonda(null);
        }, 2500);
      }
    }
  }, [datosSala, rolJugador, codigoSala]);

  // ─── Crear sala ───────────────────────────────────────────────────
  const crearSala = useCallback(async (nombre, totalRondas) => {
    setCargando(true);
    setErrorSala(null);

    const codigo = generarCodigo();
    const salaRef = ref(db, `salas/${codigo}`);

    const datosSalaInicial = {
      jugador1:    { nombre, mano: null },
      jugador2:    null,
      totalRondas,
      victorias1:  0,
      victorias2:  0,
      estado:      'esperando',
      creadoEn:    Date.now(),
    };

    try {
      await set(salaRef, datosSalaInicial);

      // Si jugador1 se desconecta, elimina la sala
      onDisconnect(salaRef).remove();

      setCodigoSala(codigo);
      setRolJugador('jugador1');
      setScreenMulti('espera');
    } catch (err) {
      setErrorSala('Error al crear la sala. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  }, []);

  // ─── Unirse a sala ────────────────────────────────────────────────
  const unirseASala = useCallback(async (codigo, nombre) => {
    setCargando(true);
    setErrorSala(null);

    const codigoUpper = codigo.toUpperCase().trim();
    const salaRef = ref(db, `salas/${codigoUpper}`);

    try {
      const snapshot = await get(salaRef);

      if (!snapshot.exists()) {
        setErrorSala('Sala no encontrada. Verifica el código.');
        setCargando(false);
        return;
      }

      const datos = snapshot.val();

      if (datos.jugador2?.nombre) {
        setErrorSala('La sala ya está llena.');
        setCargando(false);
        return;
      }

      await update(ref(db, `salas/${codigoUpper}/jugador2`), { nombre, mano: null });

      // Actualiza estado de la sala a jugando
      await update(ref(db, `salas/${codigoUpper}`), { estado: 'jugando' });

      setCodigoSala(codigoUpper);
      setRolJugador('jugador2');
      setScreenMulti('juego');
    } catch (err) {
      setErrorSala('Error al unirse a la sala. Intenta de nuevo.');
    } finally {
      setCargando(false);
    }
  }, []);

  // ─── Elegir mano ─────────────────────────────────────────────────
  const elegirMano = useCallback(async (mano) => {
    if (!codigoSala || !rolJugador) return;

    // Evita elegir si ya eligió
    const manoActual = datosSala?.[rolJugador]?.mano;
    if (manoActual) return;

    await update(ref(db, `salas/${codigoSala}/${rolJugador}`), { mano });
  }, [codigoSala, rolJugador, datosSala]);

  // ─── Abandonar sala ───────────────────────────────────────────────
  const abandonarSala = useCallback(async () => {
    if (codigoSala) {
      try {
        await remove(ref(db, `salas/${codigoSala}`));
      } catch (_) {}
    }
    setCodigoSala(null);
    setRolJugador(null);
    setDatosSala(null);
    setScreenMulti('lobby');
    setErrorSala(null);
    setResultadoRonda(null);
    setScreen('landing');
  }, [codigoSala, setScreen]);

  const value = {
    codigoSala,
    rolJugador,
    datosSala,
    screenMulti,
    setScreenMulti,
    errorSala,
    setErrorSala,
    cargando,
    resultadoRonda,
    setResultadoRonda,
    crearSala,
    unirseASala,
    elegirMano,
    abandonarSala,
  };

  return (
    <MultiplayerContext.Provider value={value}>
      {children}
    </MultiplayerContext.Provider>
  );
};

export const useMultiplayer = () => {
  const context = useContext(MultiplayerContext);
  if (!context) throw new Error('useMultiplayer debe usarse dentro de MultiplayerProvider');
  return context;
};
