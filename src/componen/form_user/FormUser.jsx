'use client'
import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer";
import Imput from "../Imput/Imput";
import "@/src/componen/form_user/FormUser.css"

const FormUser = () => {

const handleParentClick = () => {
    console.log("estoy funcionando soy singular");
  };


return (

<form className="nes-field form">
        <Imput/>
        <Singularplayer handleClick={handleParentClick} />
        <Multiplayer
        />
</form>
)

}

export default FormUser