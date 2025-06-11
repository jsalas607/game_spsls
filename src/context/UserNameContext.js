'use client'; // Esto es importante para usar Context API en el App Router

import React, { createContext, useContext, useState } from 'react';

// 1. Crea el contexto
const UserNameContext = createContext(undefined); // undefined es el valor inicial si no hay proveedor

// 2. Crea el Proveedor (Provider)
export const UserNameProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(''); // Aquí vive el estado global

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  );
};

// 3. Crea un custom hook para consumir el contexto fácilmente
export const useUserName = () => {
  const context = useContext(UserNameContext);
  if (context === undefined) {
    throw new Error('useUserName must be used within a UserNameProvider');
  }
  return context;
};