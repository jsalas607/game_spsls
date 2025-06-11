import "@/src/componen/Imput/imput.css"

const InputBase = ({ handleChange,handleKeyDown }) => {
    return (
        <div className="imput">
            <input 
                type="text" 
                id="name_field" 
                className="nes-input imput" 
                placeholder="nombre de usuario" 
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
                
        </div>
    )
}

export default InputBase