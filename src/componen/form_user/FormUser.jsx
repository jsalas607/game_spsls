import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer"
import Imput from "../Imput/Imput"

import "@/src/componen/form_user/FormUser.css"

const FormUser = () => {
return (
<form className="nes-field form">
        <Imput className="imput imputform"/>
        <Singularplayer className="singularplayer imputform"/>
        <Multiplayer className="Multiplayer imputform"/>
</form>
)
}

export default FormUser