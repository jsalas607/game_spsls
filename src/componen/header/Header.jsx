'use client'
import React from 'react'
import styles from "@/src/componen/header/Header.module.css"
import { gameOptions } from '@/src/const/const'
import Image from 'next/image'
import { useUserName } from "@/src/context/UserNameContext.js"

const Header = () => {
    const { selectedItemCompu, gameResult, isGameOver } = useUserName();

    // Lógica para determinar qué imágenes renderizar en el Header
    // Si el juego ha terminado (isGameOver es true), siempre mostramos todas las opciones.
    // De lo contrario, si la computadora ya seleccionó (selectedItemCompu no es null), mostramos solo su elección.
    // Si la computadora aún no ha seleccionado (inicio de ronda), mostramos todas las opciones.
    const imagesToRender = isGameOver
        ? gameOptions // Muestra todas las opciones si el juego ha terminado
        : selectedItemCompu
            ? [selectedItemCompu] // Muestra solo la selección de la computadora si ya hay una
            : gameOptions; // Muestra todas las opciones si no hay selección de la computadora

    // Lógica para determinar la clase del contenedor principal (<figcaption>)
    // La clase 'styles.selectedImageCompu' solo se aplica si la computadora ha seleccionado
    // Y el juego NO ha terminado. Si el juego ha terminado o no hay selección, se usa 'styles.figcaption' (el estilo por defecto para mostrar todas).
    const figcaptionClass = (selectedItemCompu && !isGameOver) ? styles.selectedImageCompu : styles.figcaption;

    return (
        <figcaption className={figcaptionClass}>
            {imagesToRender.map((item) => (
                <Image
                    key={item.name}
                    alt={item.name}
                    // La clase de estilo de la mano, y la clase específica para el ítem (roca, papel, etc.).
                    // La clase 'styles.selectedImageCompu' para la imagen individual solo se aplica
                    // si es la selección de la computadora Y el juego NO ha terminado.
                    className={`${styles.svgHand} ${styles[item.name]}`}
                    src={item.image}
                    // En el header, las imágenes no son clickeables, así que no se necesita `onClick`.
                />
            ))}
        </figcaption>
    );
};

export default Header;