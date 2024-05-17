'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

import { useApi } from '../API/API';

interface GameProps {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}



interface Type {
    games: GameProps[] | undefined,
    setGames: React.Dispatch<React.SetStateAction<GameProps[] | undefined>>;
    getGames: (page: number) => void;

    page: number
    setPage: Dispatch<SetStateAction<number>>
    
    totalPages: number;
}


const MainGameContext = createContext<Type | undefined>(undefined);

export const useMainGames = (): Type => {
    const context = useContext(MainGameContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const MainGamesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { api } = useApi()

    const [games, setGames] = useState<Array<GameProps>>()
    const [totalPages, setTotalPages] = useState<number>(1)
    const [page, setPage] = useState<number>(1)

    const getGames = async (page: number) => {
        try {
            const response = await fetch(api + '/getMainGames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ page })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log(data)
            setGames(data.games)
            setTotalPages(data.totalPages)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
       getGames(1)
    },[])

    const value = {
       games,
       setGames,
       getGames,
       
       page,
       setPage,

       totalPages
    };

    return <MainGameContext.Provider value={value}>{children}</MainGameContext.Provider>;
};