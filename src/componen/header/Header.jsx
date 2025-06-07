import roca from  '@/public/imagensvg/roca.svg'
import papel from  '@/public/imagensvg/papel.svg'
import tijera from  '@/public/imagensvg/tijera.svg'
import lagarto from  '@/public/imagensvg/lagarto.svg'
import spock from  '@/public/imagensvg/spock.svg'

import styles from "@/src/componen/header/Header.module.css"

import Image from 'next/image'



const Header = () => {
  return (
    <header className={styles.header}>
            <figcaption className={styles.figcaption}>
                <Image className={`${styles.svgHand} ${styles.roca}`} src={roca}/>
                <Image className={`${styles.svgHand} ${styles.papel}`} src={papel}/>
                <Image className={`${styles.svgHand} ${styles.tijera}`} src={tijera}/>
                <Image className={`${styles.svgHand} ${styles.lagarto}`} src={lagarto}/>
                <Image className={`${styles.svgHand} ${styles.spock}`} src={spock}/>
            </figcaption>
    </header>
  )
}

export default Header
