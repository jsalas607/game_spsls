'use client';
import "nes.css/css/nes.min.css";
import "@/src/componen/mensajes_singular_player/msj_inicial/msjInicial.css"
import { useUserName } from "@/src/context/UserNameContext.js"

const MsjInicial = () => {
  const { inputValue} = useUserName()

  return (

    <h1 className="section-msj-inicio-h1 nes-text is-primary">
      {inputValue ? `${inputValue}, ` : 'Invitado, '} e
    </h1>
  )
}

export default MsjInicial;