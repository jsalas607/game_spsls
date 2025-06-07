'use client'
import "nes.css/css/nes.min.css";
import "@/src/componen/button_multiplayer/Multiplayer.css"


const Multiplayer = () => {

const hanldclick = () => {
    console.log("estoy funcionando soy multiplayer");
}

return (
<>
    <button type="button" className="nes-btn is-primary button_multi" onClick={hanldclick}>
        multijugador
    </button>
</>
)
} 
export default Multiplayer