'use client'
import "nes.css/css/nes.min.css";

const Singularplayer = () => {

const hanldclick=() => console.log("estoy funcionando soy Singularplayer");

return (
<button  type="button" className="nes-btn is-primary" onClick={hanldclick}>
  juega ya
</button>
)
}

export default Singularplayer