import "@/src/componen/Imput/imput.css"

const InputBase = ({ handleChange }) => {
    return (
        <div className="imput">
            <input type="text" id="name_field" className="nes-input imput" placeholder="nombre de usuario" onChange={handleChange}/>
        </div>
    )
}

export default InputBase