'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_inicial/msjInicial.css"
import { useUserName } from "@/src/context/UserNameContext.js"

const MsjInicial = () => {

  const { inputValue, selectedItemUser, userWins, compuWins } = useUserName();

  return (
    <>
      {/* Mensaje principal: "Elije tu mejor mano" */}
      {/* Este mensaje solo aparece si NO hay un ítem de usuario seleccionado (inicio de ronda) */}
      {selectedItemUser === null && (
        <div className="game-section">


          <h1 className="section-msj-inicio-h1 nes-text is-primary">
            {inputValue ? `${inputValue}, ` : 'Invitado, '} elije tu mejor mano
          </h1>
          {(userWins > 0 || compuWins > 0) && (
            <h1 className="nes-text is-primary section-msj-partida-h2">
              Victorias: {userWins} - Derrotas: {compuWins}
            </h1>
          )}

        </div>
      )}


      {selectedItemUser !== null && (
        <h1 className="nes-text is-primary section-msj-partida-h2">
          Victorias: {userWins} - Derrotas: {compuWins}
        </h1>
      )}
    </>
  );
}

export default MsjInicial;