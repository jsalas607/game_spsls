'use client'
import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer";
import InputBase from "../Imput/InputBase";
import "@/src/componen/form_user/FormUser.css"
import { useRouter } from 'next/navigation'
import { useUserName } from "@/src/context/UserNameContext.js"

const FormUser = () => {

  const router = useRouter();
  const {inputValue, setInputValue} = useUserName(); 
  const processInput = (playerType) => {
    console.log(`Jugador ${playerType} seleccionado. Valor del input:`, inputValue);
  };

const handleParentClick = () => {
    if (inputValue.trim() !== '') { 
      processInput("singular");
      router.push('/GameRoom'); 
    } else {
      console.log("El nombre de usuario no puede estar vacío.");
      alert("Por favor, ingresa un nombre de usuario para jugar.");
    }
  };

  const handleParentClickMultiplayer = () => {
    if (inputValue.trim() !== '') {
      processInput("multiplayer");
    } else {
      console.log("El nombre de usuario no puede estar vacío para multiplayer.");
      alert("Por favor, ingresa un nombre de usuario para jugar.");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado (pero sin recarga)");

  };


  return (

    <form className="nes-field form" onSubmit={handleSubmit}>
      <InputBase handleChange={handleChange} value={inputValue} />
      <Singularplayer handleClick={handleParentClick} />
      <Multiplayer handleClick={handleParentClickMultiplayer}/>
    </form>
  )
}

export default FormUser;