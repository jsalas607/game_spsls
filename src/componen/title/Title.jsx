import styles from "@/src/componen/title/Title.module.css"

const Title = () => {

  const title = [
    {
      name: 'Piedra, Papel',
    },
    {
      name: 'Tijera, Lagarto',
    },
    {
      name: 'Spock',
    },
  ]

  return (
    <header className={styles.header}>
      {title.map((item) => (
        <h1 key={item.name} className="nes-text is-primary">
          {item.name}
        </h1>
      ))}
    </header>
  )
}

export default Title