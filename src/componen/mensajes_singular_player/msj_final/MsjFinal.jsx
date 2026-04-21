import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_final/msjfinal.css"

const MsjFinal = () => {
  return (
    <main className="msj_final_page">
      <div className="nes-container is-rounded msj_final_card">
        <h2 className="nes-text is-success msj_final_title">¡Has ganado!</h2>
        <div className="msj_final_stats">
          <p className="nes-text is-primary msj_final_stat">
            <span className="nes-text is-success">▶</span> Victorias: 3
          </p>
          <p className="nes-text is-primary msj_final_stat">
            <span className="nes-text is-error">▶</span> Derrotas: 2
          </p>
        </div>
      </div>
      <div className="msj_final_actions">
        <button className="nes-btn is-primary msj_final_btn">reiniciar</button>
        <button className="nes-btn is-warning msj_final_btn">finalizar</button>
      </div>
    </main>
  )
}

export default MsjFinal
