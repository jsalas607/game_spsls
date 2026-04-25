'use client'
import { useState } from 'react';
import { useMultiplayer } from '@/src/context/MultiplayerContext';
import { useUserName } from '@/src/context/UserNameContext';
import styles from './LobbyMulti.module.css';

const LobbyMulti = () => {
  const { crearSala, unirseASala, abandonarSala, errorSala, setErrorSala, cargando } = useMultiplayer();
  const { inputValue } = useUserName();

  const [modo, setModo]           = useState(null); // 'crear' | 'unirse'
  const [totalRondas, setTotalRondas] = useState(null);
  const [codigoInput, setCodigoInput] = useState('');

  const nombre = inputValue?.trim() || 'Jugador';

  const handleCrear = () => {
    if (!totalRondas) {
      setErrorSala('Elige la cantidad de rondas.');
      return;
    }
    crearSala(nombre, totalRondas);
  };

  const handleUnirse = () => {
    if (!codigoInput.trim()) {
      setErrorSala('Ingresa el código de sala.');
      return;
    }
    unirseASala(codigoInput, nombre);
  };

  return (
    <div className={styles.lobby}>
      <h1 className={`nes-text is-primary ${styles.titulo}`}>multijugador</h1>
      <p className={`nes-text is-disabled ${styles.subtitulo}`}>jugando como: {nombre}</p>

      {errorSala && (
        <p className={`nes-text is-error ${styles.error}`}>{errorSala}</p>
      )}

      {/* Botones principales */}
      {!modo && (
        <div className={styles.opciones}>
          <button
            className={`nes-btn is-primary ${styles.btn}`}
            onClick={() => { setModo('crear'); setErrorSala(null); }}
          >
            crear sala
          </button>
          <button
            className={`nes-btn is-success ${styles.btn}`}
            onClick={() => { setModo('unirse'); setErrorSala(null); }}
          >
            unirse a sala
          </button>
        </div>
      )}

      {/* Volver al inicio (solo cuando no hay un modo activo) */}
      {!modo && (
        <button
          className={`nes-btn ${styles.btn}`}
          onClick={abandonarSala}
        >
          volver al inicio
        </button>
      )}

      {/* Crear sala */}
      {modo === 'crear' && (
        <div className={styles.panel}>
          <p className={`nes-text is-warning ${styles.panelTitulo}`}>nueva sala</p>

          <div className={styles.rondasSelector}>
            <p className={`nes-text is-disabled ${styles.rondasLabel}`}>cantidad de rondas</p>
            <div className={styles.rondasOpciones}>
              <label className={styles.rondasOpcion}>
                <input
                  type="radio"
                  className="nes-radio"
                  name="rondas-multi"
                  checked={totalRondas === 3}
                  onChange={() => setTotalRondas(3)}
                />
                <span className="nes-text is-primary">3 rondas</span>
              </label>
              <label className={styles.rondasOpcion}>
                <input
                  type="radio"
                  className="nes-radio"
                  name="rondas-multi"
                  checked={totalRondas === 5}
                  onChange={() => setTotalRondas(5)}
                />
                <span className="nes-text is-primary">5 rondas</span>
              </label>
            </div>
          </div>

          <div className={styles.acciones}>
            <button
              className={`nes-btn is-primary ${styles.btn}`}
              onClick={handleCrear}
              disabled={cargando}
            >
              {cargando ? 'creando...' : 'crear'}
            </button>
            <button
              className={`nes-btn ${styles.btn}`}
              onClick={() => { setModo(null); setErrorSala(null); }}
            >
              volver
            </button>
          </div>
        </div>
      )}

      {/* Unirse a sala */}
      {modo === 'unirse' && (
        <div className={styles.panel}>
          <p className={`nes-text is-warning ${styles.panelTitulo}`}>unirse a sala</p>
          <input
            className={`nes-input ${styles.codigoInput}`}
            placeholder="código de sala"
            value={codigoInput}
            onChange={(e) => setCodigoInput(e.target.value.toUpperCase())}
            maxLength={6}
          />
          <div className={styles.acciones}>
            <button
              className={`nes-btn is-success ${styles.btn}`}
              onClick={handleUnirse}
              disabled={cargando}
            >
              {cargando ? 'entrando...' : 'entrar'}
            </button>
            <button
              className={`nes-btn ${styles.btn}`}
              onClick={() => { setModo(null); setErrorSala(null); setCodigoInput(''); }}
            >
              volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LobbyMulti;
