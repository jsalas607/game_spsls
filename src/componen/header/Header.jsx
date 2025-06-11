import React from 'react'
import styles from "@/src/componen/header/Header.module.css"
import { gameOptions } from '@/src/const/const'
import Image from 'next/image'



const Header = () => {
  return (
    <header className={styles.header}>
            <figcaption className={styles.figcaption}>
                {gameOptions.map((item) => (
                <Image key={item.name} alt={item.name} className={`${styles.svgHand} ${styles[item.name]}`} src={item.image} />
              ))}
            </figcaption>
    </header>
  )
}

export default Header
