'use client'
import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer";
import InputBase from "../Imput/InputBase";
import "@/src/componen/form_user/FormUser.css"
import { useRouter } from 'next/navigation'
import { useUserName } from "@/src/context/UserNameContext.js"
import { useToast } from "@/src/context/ToastContext.js"

const FormUser = () => {

  const router = useRouter();
  const { inputValue, setInputValue } = useUserName();
  const { addToast } = useToast();

const handleParentClick = () => {
    if (inputValue.trim() !== '') {
      router.push('/GameRoom');
    } else {
      addToast('Ingresa un nombre de usuario para jugar.');
    }
  };

  const handleParentClickMultiplayer = () => {
    if (inputValue.trim() !== '') {
      addToast('Multijugador próximamente.', 'warning');
    } else {
      addToast('Ingresa un nombre de usuario para jugar.');
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
      {/* <Multiplayer handleClick={handleParentClickMultiplayer}/> */}
    </form>
  )
}

export default FormUser;