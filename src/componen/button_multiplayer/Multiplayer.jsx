'use client'
import "nes.css/css/nes.min.css";


const Multiplayer = () => {

const hanldclick=() => console.log("estoy funcionando soy Multiplayer");

return (

<>
    <button type="button" className="nes-btn is-primary" onClick={hanldclick}>
        multijugador
    </button>
</>
)
} 
export default Multiplayer