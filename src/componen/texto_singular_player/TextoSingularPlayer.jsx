'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/texto_singular_player/textoSingularPlayer.css";
import MsjInicial from "../mensajes_singular_player/msj_inicial/MsjInicial";
import MsjPartida from "../mensajes_singular_player/msj_partida/MsjPartida";
import { useUserName } from "@/src/context/UserNameContext.js";

const TextoSingularPlayer = () => {

  const { selectedItemUser, gameResult } = useUserName();


  const showInitialMessage = !selectedItemUser && !gameResult;


  const showGameMessage = selectedItemUser || gameResult;

  return (
    <>
      <section className="section-msj-inicio">
        {showInitialMessage && <MsjInicial />}
        {showGameMessage && <MsjPartida />}
      </section>
    </>
  );
};

export default TextoSingularPlayer;