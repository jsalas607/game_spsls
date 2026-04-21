'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/texto_singular_player/textoSingularPlayer.css";
import MsjInicial from "../mensajes_singular_player/msj_inicial/MsjInicial";
import MsjPartida from "../mensajes_singular_player/msj_partida/MsjPartida";
import { useUserName } from "@/src/context/UserNameContext.js";

const TextoSingularPlayer = () => {
  const { selectedItemUser, gameResult, countdown } = useUserName();

  const showCountdown = countdown !== null && countdown > 0;
  const showInitialMessage = !selectedItemUser && !gameResult && !showCountdown;
  const showGameMessage = (selectedItemUser || gameResult) && !showCountdown;

  return (
    <section className="section-msj-inicio">
      {showCountdown && (
        <div className="countdown-container">
          <span className="nes-text is-warning countdown-number">{countdown}</span>
        </div>
      )}
      {showInitialMessage && <MsjInicial />}
      {showGameMessage && <MsjPartida />}
    </section>
  );
};

export default TextoSingularPlayer;
