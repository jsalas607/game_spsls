import React from 'react'
import Image from 'next/image'
import { gameOptions } from '@/src/const/const'
import styles from "@/src/componen/footer/footer.module.css"


const Footer = () => {
return (
        <figcaption className={styles.figcaption}>
            { gameOptions.map((item) => (
                <Image
                    key={item.name}
                    alt={item.name}
                    className={`${styles.svgHand} ${styles[item.name]}`}
                    src={item.image}
                />
            ))}
        </figcaption>
)
}

export default Footer;
