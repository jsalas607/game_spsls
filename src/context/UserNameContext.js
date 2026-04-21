'use client'
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { gameOptions } from '@/src/const/const';

const UserNameContext = createContext();

const REGLAS_VICTORIA = {
    "roca": ["tijera", "lagarto"],
    "papel": ["roca", "spock"],
    "tijera": ["papel", "lagarto"],
    "lagarto": ["spock", "papel"],
    "spock": ["tijera", "roca"]
};

export const UserNameProvider = ({ children }) => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState('');
    const [selectedItemUser, setSelectedItemUser] = useState(null);
    const [selectedItemCompu, setSelectedItemCompu] = useState(null);
    const [gameResult, setGameResult] = useState(null);
    const [userWins, setUserWins] = useState(0);
    const [compuWins, setCompuWins] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const WINNING_SCORE = 3;

    const generateCompuSelection = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * gameOptions.length);
        const randomCompuItem = gameOptions[randomIndex];
        setSelectedItemCompu(randomCompuItem);
        console.log("La computadora seleccionó:", randomCompuItem.name);
    }, []);

    const determinarGanador = useCallback(() => {
        if (!selectedItemUser || !selectedItemCompu) {
            setGameResult(null);
            return;
        }

        const eleccionUsuario = selectedItemUser;
        const eleccionCompu = selectedItemCompu.name;
        let currentResult = null;

        if (eleccionUsuario === eleccionCompu) {
            currentResult = "¡Empate!";
        } else if (REGLAS_VICTORIA[eleccionUsuario] && REGLAS_VICTORIA[eleccionUsuario].includes(eleccionCompu)) {
            currentResult = `¡Ganaste! ${eleccionUsuario} vence a ${eleccionCompu}`;
            setUserWins(prevWins => prevWins + 1);
        } else {
            currentResult = `¡Perdiste! ${eleccionCompu} vence a ${eleccionUsuario} `;
            setCompuWins(prevWins => prevWins + 1);
        }
        setGameResult(currentResult);
    }, [selectedItemUser, selectedItemCompu]);

    useEffect(() => {
        if (selectedItemUser && selectedItemCompu) {
            determinarGanador();
        } else {
            setGameResult(null);
        }
    }, [selectedItemUser, selectedItemCompu, determinarGanador]);


useEffect(() => {
    if (userWins >= WINNING_SCORE || compuWins >= WINNING_SCORE) {
        const timer = setTimeout(() => {
            setIsGameOver(true); 
        }, 4000); 

        return () => clearTimeout(timer);
    }
}, [userWins, compuWins, WINNING_SCORE]);

    const resetGameButKeepInput = useCallback(() => {
        setSelectedItemUser(null);
        setSelectedItemCompu(null);
        setGameResult(null);
        setUserWins(0);
        setCompuWins(0);
        setIsGameOver(false); 
    }, []);

   
    const resetAllGame = useCallback(() => {
        setInputValue(''); 
        setSelectedItemUser(null);
        setSelectedItemCompu(null);
        setGameResult(null);
        setUserWins(0);
        setCompuWins(0);
        setIsGameOver(false); 
        router.push('/'); 
    }, [router]);

    const resetSelections = useCallback(() => {
        setSelectedItemUser(null);
        setSelectedItemCompu(null);
        setGameResult(null);

    }, []);

    const value = {
        inputValue,
        setInputValue,
        selectedItemUser,
        setSelectedItemUser,
        selectedItemCompu,
        setSelectedItemCompu,
        generateCompuSelection,
        gameResult,
        userWins,
        compuWins,
        resetSelections,
        determinarGanador,
        isGameOver, 
        resetAllGame, 
        resetGameButKeepInput
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
};;