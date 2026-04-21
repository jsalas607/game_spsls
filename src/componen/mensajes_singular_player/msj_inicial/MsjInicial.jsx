'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_inicial/msjInicial.css"
import { useUserName } from "@/src/context/UserNameContext.js"

const Marcador = ({ userWins, compuWins }) => (
  <h1 className="section-msj-partida-h2">
    <span className="nes-text is-success">Victorias: {userWins}</span>
    <span className="nes-text is-primary"> - </span>
    <span className="nes-text is-error">Derrotas: {compuWins}</span>
  </h1>
);

const MsjInicial = () => {
  const { inputValue, selectedItemUser, userWins, compuWins } = useUserName();

  return (
    <>
      {selectedItemUser === null && (
        <div className="game-section">
          <h1 className="section-msj-inicio-h1 nes-text is-primary">
            {inputValue ? `${inputValue}, ` : 'Invitado, '} elije tu mejor mano
          </h1>
          {(userWins > 0 || compuWins > 0) && (
            <Marcador userWins={userWins} compuWins={compuWins} />
          )}
        </div>
      )}

      {selectedItemUser !== null && (
        <Marcador userWins={userWins} compuWins={compuWins} />
      )}
    </>
  );
}

export default MsjInicial;
