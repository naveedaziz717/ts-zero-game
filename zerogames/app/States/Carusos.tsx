'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

import { useApi } from './API/API';

interface GameProps {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}



interface CarusosType {
    games: GameProps[] | undefined,
    setGames: React.Dispatch<React.SetStateAction<GameProps[] | undefined>>;

    part1Games: GameProps[] | undefined,
    part2Games: GameProps[] | undefined,
    part3Games: GameProps[] | undefined,
    part4Games: GameProps[] | undefined,
    part5Games: GameProps[] | undefined,
    
}


const CarusosContext = createContext<CarusosType | undefined>(undefined);

export const useCarusos = (): CarusosType => {
    const context = useContext(CarusosContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const CarusosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { api } = useApi()

    const [games, setGames] = useState<Array<GameProps>>()


    //specialCaruso vars
    const [part1Games, setPart1Games] = useState<Array<GameProps>>()

    const [part2Games, setPart2Games] = useState<Array<GameProps>>()

    const [part3Games, setPart3Games] = useState<Array<GameProps>>()

    const [part4Games, setPart4Games] = useState<Array<GameProps>>()

    const [part5Games, setPart5Games] = useState<Array<GameProps>>()




    const getCarusoGames = async () => {
        try {
            const response = await fetch(api + '/getCarusoGames', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setGames(data)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    };

    const getSpecialCarusoGames = async () => {
        try {
            const response = await fetch(api + '/getSpecialCarusoGames', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            console.log('Data:', data);
            setPart1Games(data[0])
            setPart2Games(data[1])
            setPart3Games(data[2])
            setPart4Games(data[3])
            setPart5Games(data[4])
         

        } catch (error) {
            //console.error('Error fetching data:', error.message);
    };

}


useEffect(() => {
    getCarusoGames()
    getSpecialCarusoGames()
}, [])

const value = {
    games,
    setGames,

    part1Games,
    part2Games,
    part3Games,
    part4Games,
    part5Games

};

return <CarusosContext.Provider value={value}>{children}</CarusosContext.Provider>;
};