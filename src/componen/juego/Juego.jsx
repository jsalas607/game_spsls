'use client'
import styles from '@/src/componen/juego/Juego.module.css'
import Image from 'next/image'
import { gameOptions } from '@/src/const/const'
import { useUserName } from "@/src/context/UserNameContext.js"
import { useState } from 'react'; 

const Juego = () => {
    const { selectedItemUser, setSelectedItemUser, generateCompuSelection, setSelectedItemCompu, gameResult, isGameOver } = useUserName();
    const [isCooldownActive, setIsCooldownActive] = useState(false);

    const handleImageClick = (itemName) => {
        if (isGameOver || selectedItemUser !== null || isCooldownActive) {
            return;
        }

        if (gameResult && selectedItemUser !== itemName) {
            return;
        }

        setIsCooldownActive(true);

        setSelectedItemUser(itemName);


        generateCompuSelection();

        setTimeout(() => {
            setSelectedItemUser(null);
            setSelectedItemCompu(null);
            setIsCooldownActive(false); 
        }, 4000);
    };

    const imagesToRender = isGameOver
        ? gameOptions
        : selectedItemUser
            ? gameOptions.filter(item => item.name === selectedItemUser)
            : gameOptions;

    return (
        <figcaption className={`${isGameOver || !selectedItemUser ? styles.figcaption : styles.centerSingleImage}`}>
            {imagesToRender.map((item) => (
                <Image
                    key={item.name}
                    alt={item.name}
                    className={`${styles.svgHand} ${styles[item.name]} ${selectedItemUser === item.name ? styles.selectedImage : ''} ${(gameResult && selectedItemUser !== item.name) || isGameOver || isCooldownActive || selectedItemUser !== null ? styles.disabledImage : ''}`}
                    src={item.image}
                    onClick={(isGameOver || isCooldownActive || selectedItemUser !== null) ? undefined : () => handleImageClick(item.name)}
                />
            ))}
        </figcaption>
    );
};

export default Juego;