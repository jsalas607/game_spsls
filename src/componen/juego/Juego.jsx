'use client'
import styles from '@/src/componen/juego/Juego.module.css'
import Image from 'next/image'
import { gameOptions } from '@/src/const/const'
import { useUserName } from "@/src/context/UserNameContext.js"
import { useState, useEffect, useRef } from 'react';

const Juego = () => {
    const {
        selectedItemUser,
        setSelectedItemUser,
        generateCompuSelection,
        setSelectedItemCompu,
        gameResult,
        isGameOver,
        countdown,
        setCountdown,
    } = useUserName();

    const [isCooldownActive, setIsCooldownActive] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    // Limpia todos los timers al desmontar el componente (ej: al abandonar)
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleImageClick = (itemName) => {
        if (isGameOver || selectedItemUser !== null || isCooldownActive) return;

        setSelectedItemUser(itemName);
        setIsCooldownActive(true);

        let count = 3;
        setCountdown(count);

        intervalRef.current = setInterval(() => {
            count--;
            setCountdown(count);

            if (count <= 0) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setCountdown(null);
                generateCompuSelection();

                timeoutRef.current = setTimeout(() => {
                    setSelectedItemUser(null);
                    setSelectedItemCompu(null);
                    setIsCooldownActive(false);
                    timeoutRef.current = null;
                }, 2500);
            }
        }, 1000);
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
                    width={72}
                    height={72}
                    onClick={(isGameOver || isCooldownActive || selectedItemUser !== null) ? undefined : () => handleImageClick(item.name)}
                />
            ))}
        </figcaption>
    );
};

export default Juego;
