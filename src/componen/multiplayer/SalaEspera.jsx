'use client'
import { useMultiplayer } from '@/src/context/MultiplayerContext';
import styles from './SalaEspera.module.css';

const SalaEspera = () => {
  const { codigoSala, abandonarSala } = useMultiplayer();

  return (
    <div className={styles.espera}>
      <h1 className={`nes-text is-primary ${styles.titulo}`}>sala creada</h1>

      <div className={`nes-container is-rounded ${styles.card}`}>
        <p className={`nes-text is-disabled ${styles.label}`}>comparte este código</p>
        <p className={`nes-text is-warning ${styles.codigo}`}>{codigoSala}</p>
        <p className={`nes-text is-disabled ${styles.hint}`}>
          dile a tu amigo que lo ingrese para unirse
        </p>
      </div>

      <div className={styles.esperando}>
        <span className={`nes-text is-primary ${styles.puntos}`}>esperando jugador</span>
        <span className={`nes-text is-primary ${styles.animacion}`}>...</span>
      </div>

      <button
        className={`nes-btn is-error ${styles.btn}`}
        onClick={abandonarSala}
      >
        cancelar
      </button>
    </div>
  );
};

export default SalaEspera;
