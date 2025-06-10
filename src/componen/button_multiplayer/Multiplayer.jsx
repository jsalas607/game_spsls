'use client'
import "nes.css/css/nes.min.css";
import "@/src/componen/button_multiplayer/Multiplayer.css"


const Multiplayer = ({ handleClick }) => {


return (
<>
    <button type="button" className="nes-btn is-primary button_multi" onClick={handleClick}>
        multijugador
    </button>
</>
)
} 
export default Multiplayer