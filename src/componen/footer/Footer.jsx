import React from 'react'
import styles from '@/src/componen/footer/Footer.module.css'
import Image from 'next/image'
import { gameOptions } from '@/src/const/const'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <figcaption className={styles.figcaption}>
          {gameOptions.map((item) => (
            <Image key={item.name} alt={item.name} className={`${styles.svgHand} ${styles[item.name]}`} src={item.image} />
          ))}
        </figcaption>
      </footer>
    </>
  )
}

export default Footer