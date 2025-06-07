import Singularplayer from "../button_single_player/Singularplayer"
import Multiplayer from "../button_multiplayer/Multiplayer";
import Imput from "../Imput/Imput";
import React from 'react';
import "@/src/componen/form_user/FormUser.css"

const FormUser = () => {


return (
<form className="nes-field form">
        <Imput/>
        <Singularplayer/>
        <Multiplayer
        />
</form>
)

}

export default FormUser