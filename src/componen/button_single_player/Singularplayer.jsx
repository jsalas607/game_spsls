'use client'
import "nes.css/css/nes.min.css";
import "@/src/componen/button_single_player/singularplayer.css"

const Singularplayer = () => {
const handleClick =()=> console.log("estoy funcionando soy singularplayer")

    return (
    <button type="button" className="nes-btn is-primary butoon_singular" onClick={handleClick}>
       juega ya 
    </button>
  )
}

export default Singularplayer