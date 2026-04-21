'use client'
import Juego from "@/src/componen/juego/Juego"
import TextoSingularPlayer from "@/src/componen/texto_singular_player/TextoSingularPlayer"
import GameOverScreen from "@/src/componen/GameOverScreen/GameOverScreen"
import { useUserName } from "@/src/context/UserNameContext.js"
import styles from "./gameRoom.module.css"

const RoomSigularPlayer = () => {
  const { isGameOver } = useUserName()

  return (
    <main className={styles.page}>
      {isGameOver ? (
        <GameOverScreen />
      ) : (
        <TextoSingularPlayer />
      )}
      <Juego />
    </main>
  )
}

export default RoomSigularPlayer
