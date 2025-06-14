'use client'
import styles from '@/src/componen/footer/Footer.module.css'
import Image from 'next/image'
import { gameOptions } from '@/src/const/const'
import { useUserName } from "@/src/context/UserNameContext.js"

const Footer = () => {

  const { selectedItemUser, setSelectedItemUser, generateCompuSelection, setSelectedItemCompu } = useUserName(); 

  const handleImageClick = (itemName) => {

    const newSelectedItemUserValue = prevSelectedItem =>
      prevSelectedItem === itemName ? null : itemName;


    setSelectedItemUser(newSelectedItemUserValue);
    
    if (newSelectedItemUserValue(selectedItemUser) !== null) {
        generateCompuSelection(); 
    } else {
        setSelectedItemCompu(null);
    }
  };

  const imagesToRender = selectedItemUser
    ? gameOptions.filter(item => item.name === selectedItemUser)
    : gameOptions;

  return (
    <figcaption className={`${selectedItemUser ? styles.centerSingleImage : styles.figcaption}`}>
      {imagesToRender.map((item) => (
        <Image
          key={item.name}
          alt={item.name}
          className={`${styles.svgHand} ${styles[item.name]} ${selectedItemUser === item.name ? styles.selectedImage : ''}`}
          src={item.image}
          onClick={() => handleImageClick(item.name)}
        />
      ))}
    </figcaption>
  );
};
export default Footer;