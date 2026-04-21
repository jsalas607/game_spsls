'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_partida/msjpartida.css";
import { useUserName } from "@/src/context/UserNameContext.js";

const MsjPartida = () => {
    const { gameResult, userWins, compuWins } = useUserName();

    if (!gameResult) {
        return null;
    }

    const esEmpate = gameResult.includes('Empate');
    const esVictoria = gameResult.includes('Ganaste');

    const colorResultado = esEmpate
        ? 'is-warning'
        : esVictoria
            ? 'is-success'
            : 'is-error';

    return (
        <div className="partida">
            <h1 className={`nes-text ${colorResultado} section-msj-partida-h1`}>
                {gameResult}
            </h1>
            <h1 className="section-msj-partida-h2">
                <span className="nes-text is-success">Victorias: {userWins}</span>
                <span className="nes-text is-primary"> - </span>
                <span className="nes-text is-error">Derrotas: {compuWins}</span>
            </h1>
        </div>
    );
};

export default MsjPartida;
