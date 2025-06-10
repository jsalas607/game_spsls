'use client'
import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer";
import InputBase from "../Imput/InputBase";
import "@/src/componen/form_user/FormUser.css"

const FormUser = () => {

  const handleParentClick = () => {
    console.log("estoy funcionando soy singular");
  };

  const handleParentClickMultiplayer = () => {
    console.log("estoy funcionando soy multiplayer");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };


  return (
    <form className="nes-field form">
      <InputBase handleChange={handleChange} />
      <Singularplayer handleClick={handleParentClick} />
      <Multiplayer handleClick={handleParentClickMultiplayer}/>
    </form>
  )

}

export default FormUser