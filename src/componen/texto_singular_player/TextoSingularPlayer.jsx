import "nes.css/css/nes.min.css";
import  "@/src/componen/texto_singular_player/textoSingularPlayer.css"
import MsjInicial from "../mensajes_singular_player/msj_inicial/MsjInicial";
import MsjPartida from "../mensajes_singular_player/msj_partida/MsjPartida";
const MsjIncio = () => {
const estaAutenticado= false
  return (
<>
  <section className="section-msj-inicio"> 
    
      {estaAutenticado ? (
       <MsjInicial/> // Se muestra si estaAutenticado es true
      ) : (
        <MsjPartida/> // Se muestra si estaAutenticado es false
      )}
  </section>
  




</>
  )
}

export default MsjIncio