'use client'
import React, { createContext, useContext, useState, useCallback } from 'react';
import { gameOptions } from '@/src/const/const';
const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(''); 
  const [selectedItemUser, setSelectedItemUser] = useState(null);
  const [selectedItemCompu, setSelectedItemCompu] = useState(null); 

  const generateCompuSelection = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * gameOptions.length);
    const randomCompuItem = gameOptions[randomIndex];
    setSelectedItemCompu(randomCompuItem);
    console.log("La computadora seleccionó:", randomCompuItem.name); 
  }, []); 


  const resetSelections = useCallback(() => {
    setSelectedItemUser(null);
    setSelectedItemCompu(null);
  }, []);

  const value = {
    inputValue,
    setInputValue,
    selectedItemUser,
    setSelectedItemUser,
    selectedItemCompu,
    setSelectedItemCompu, 
    generateCompuSelection, 
    resetSelections,
  };

  return (
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};  

export const useUserName = () => {
  const context = useContext(UserNameContext);
  if (!context) {
    throw new Error('useUserName must be used within a UserNameProvider');
  }
  return context;
};