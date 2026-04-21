'use client';
import React from 'react';
import "nes.css/css/nes.min.css";
import "@/src/componen/GameOverScreen/gameoverscreen.css"
import { useUserName } from "@/src/context/UserNameContext.js";

const GameOverScreen = () => {
    const { userWins, compuWins, resetAllGame, resetGameButKeepInput, totalRounds, inputValue } = useUserName();

    const nombre = inputValue?.trim() || 'Jugador';
    const gano = userWins >= totalRounds;
    const winnerMessage = gano
        ? `¡${nombre}, has ganado la partida!`
        : `¡${nombre}, has perdido la partida!`;

    return (
        <div className='gamaover'>
            <h1 className={`nes-text ${gano ? 'is-success' : 'is-error'}`}>{winnerMessage}</h1>
            <h1 className="nes-text is-primary">Puntuación Final: {userWins} - {compuWins}</h1>
            <div className='gamaover_butoon'>
                <button
                    className="nes-btn is-primary gamaover_butoon_reset"
                    onClick={resetGameButKeepInput}
                >
                    Reiniciar
                </button>
                <button
                    onClick={resetAllGame}
                    className="nes-btn is-primary gamaover_butoon_final"
                >
                    Finalizar
                </button>
            </div>
        </div>
    );
};

export default GameOverScreen;
