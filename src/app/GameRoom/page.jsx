'use client'
import Juego from "@/src/componen/juego/Juego"
import Header from "@/src/componen/header/Header"
import TextoSingularPlayer from "@/src/componen/texto_singular_player/TextoSingularPlayer"
import GameOverScreen from "@/src/componen/GameOverScreen/GameOverScreen"; // Importa el nuevo componente
import { useUserName } from "@/src/context/UserNameContext.js"; // Importa el hook para acceder al contexto

const RoomSigularPlayer = () => {
const { isGameOver } = useUserName(); // Obtén el estado de juego terminado

  return (
    <>
      {/* <Header/> */}
      {/* Renderiza condicionalmente: TextoSingularPlayer o GameOverScreen */}
      {isGameOver ? (
        <GameOverScreen />
      ) : (
        <TextoSingularPlayer/>
      )}
      <Juego/>
    </>
  )
}

export default RoomSigularPlayer