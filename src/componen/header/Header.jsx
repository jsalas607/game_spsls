'use client'
import React from 'react'
import styles from "@/src/componen/header/Header.module.css"
import { gameOptions } from '@/src/const/const'
import Image from 'next/image'
import { useUserName } from "@/src/context/UserNameContext.js"

const Header = () => {

  const { selectedItemCompu } = useUserName(); 

  return (
      <figcaption className={`${selectedItemCompu ? styles.selectedImageCompu : styles.figcaption}`}>
        {selectedItemCompu ? ( 
          <Image 
            key={selectedItemCompu.name} 
            alt={selectedItemCompu.name} 
            className={`${styles.svgHand} ${styles[selectedItemCompu.name]}`} 
            src={selectedItemCompu.image} 
          />
        ) : ( 
          gameOptions.map((item) => (
            <Image 
              key={item.name} 
              alt={item.name} 
              className={`${styles.svgHand} ${styles[item.name]}`} 
              src={item.image} 
            />
          ))
        )}
      </figcaption>
  )
}

export default Header