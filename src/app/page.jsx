'use client'
import Footer from "@/src/componen/footer/Footer.jsx";
import FormUser from "@/src/componen/form_user/FormUser";
import Title from "@/src/componen/title/Title";
import Juego from "@/src/componen/juego/Juego";
import Header from "@/src/componen/header/Header";
import TextoSingularPlayer from "@/src/componen/texto_singular_player/TextoSingularPlayer";
import GameOverScreen from "@/src/componen/GameOverScreen/GameOverScreen";
import { useUserName } from "@/src/context/UserNameContext.js";
import styles from "@/src/app/page.module.css";

export default function Home() {
  const { screen, isGameOver, resetAllGame } = useUserName();

  if (screen === 'game') {
    return (
      <main className={styles.gamePage}>
        {isGameOver ? (
          <GameOverScreen />
        ) : (
          <>
            <Header />
            <TextoSingularPlayer />
          </>
        )}
        <div className={styles.gameFooter}>
          <Juego />
        </div>
        {!isGameOver && (
          <button
            className={`nes-btn is-error ${styles.abandonBtn}`}
            onClick={resetAllGame}
            title="Abandonar partida"
          >
            A
          </button>
        )}
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Title />
      <FormUser />
      <div className={styles.weaponsSection}>
        <p className={`nes-text is-disabled ${styles.weaponsLabel}`}>tus armas</p>
        <Footer />
      </div>
    </main>
  );
}
