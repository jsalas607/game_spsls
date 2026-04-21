'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_partida/msjpartida.css";
import { useUserName } from "@/src/context/UserNameContext.js";
import Header from "../../header/Header";

const MsjPartida = () => {
    const { gameResult, userWins,compuWins } = useUserName();

    if (!gameResult) {
        return null;
    }

    return (

    <>      
        <div className="partida">
            <Header/>
            <h1 className="nes-text is-primary section-msj-partida-h1">
                {gameResult}
            </h1>
            <h1 className="nes-text is-primary section-msj-partida-h2">
                Victorias: {userWins} - Derrotas: {compuWins}
            </h1>
        </div>
    </>
    );
};

export default MsjPartida;