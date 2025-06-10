import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_final/msjfinal.css"

const MsjFinal = () => {
  return (
    <>
        <div className="msj_final">
            <h1 className="nes-text is-primary">as ganado</h1>
            <h1 className="nes-text is-primary">vistoria 3</h1>
            <h1 className="nes-text is-primary">derrota 2</h1>
        </div>
        <button className="nes-btn is-primary">reiniciar</button>
        <button className="nes-btn is-primary">finalizar</button>
    </>
  )
}

export default MsjFinal