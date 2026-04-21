'use client'
import Singularplayer from "../button_single_player/Singularplayer"
import InputBase from "../Imput/InputBase";
import "@/src/componen/form_user/FormUser.css"
import { useUserName } from "@/src/context/UserNameContext.js"
import { useToast } from "@/src/context/ToastContext.js"

const FormUser = () => {
  const { inputValue, setInputValue, setScreen, totalRounds, setTotalRounds } = useUserName();
  const { addToast } = useToast();

  const handleParentClick = () => {
    if (inputValue.trim() === '') {
      addToast('Ingresa un nombre de usuario para jugar.');
      return;
    }
    if (!totalRounds) {
      addToast('Te falta escoger la cantidad de rondas.', 'warning');
      return;
    }
    setScreen('game');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleParentClick();
  };

  return (
    <form className="nes-field form" onSubmit={handleSubmit}>
      <InputBase handleChange={handleChange} value={inputValue} />

      <div className="rounds-selector">
        <p className="nes-text is-disabled rounds-label">cantidad de rondas</p>
        <div className="rounds-options">
          <label className={`rounds-option ${totalRounds === 3 ? 'rounds-option--active' : ''}`}>
            <input
              type="radio"
              className="nes-radio"
              name="rounds"
              checked={totalRounds === 3}
              onChange={() => setTotalRounds(3)}
            />
            <span>3 rondas</span>
          </label>
          <label className={`rounds-option ${totalRounds === 5 ? 'rounds-option--active' : ''}`}>
            <input
              type="radio"
              className="nes-radio"
              name="rounds"
              checked={totalRounds === 5}
              onChange={() => setTotalRounds(5)}
            />
            <span>5 rondas</span>
          </label>
        </div>
      </div>

      <Singularplayer handleClick={handleParentClick} />
    </form>
  )
}

export default FormUser;
