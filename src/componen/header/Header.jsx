'use client'
import React from 'react'
import styles from "@/src/componen/header/Header.module.css"
import { gameOptions } from '@/src/const/const'
import Image from 'next/image'
import { useUserName } from "@/src/context/UserNameContext.js"

const Header = () => {
    const { selectedItemCompu, gameResult, isGameOver } = useUserName();

    const imagesToRender = isGameOver
        ? gameOptions
        : selectedItemCompu
            ? [selectedItemCompu]
            : gameOptions;

    const figcaptionClass = (selectedItemCompu && !isGameOver) ? styles.selectedImageCompu : styles.figcaption;

    return (
        <figcaption className={figcaptionClass}>
            {imagesToRender.map((item) => (
                <Image
                    key={item.name}
                    alt={item.name}
                    className={`${styles.svgHand} ${styles[item.name]}`}
                    src={item.image}
                    width={72}
                    height={72}
                />
            ))}
        </figcaption>
    );
};

export default Header;
