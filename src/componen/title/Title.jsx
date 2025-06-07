import styles from "@/src/componen/title/Title.module.css"

const Title = () => {
  return (
<header className={styles.header}>
  <h1 className="nes-text is-primary">
    Piedra Papel
  </h1>  <h1 className="nes-text is-primary">
    Tijera Lagarto
  </h1>  <h1 className="nes-text is-primary">
    Spock
  </h1>
</header>
  )
}

export default Title