'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

import { useApi } from '../API/API';



interface GameProps {

    General: {
        Title: string;
        Link: string;
        imgSrc: string;
        GamePrice: string | null;
        DiscountOriginalPrice: string | null;
        FinalPrice: string | null;
        gameDiscount: boolean | null;
        Keywords: gameKeywords[]

    }

    About: {
        Description: string;
        Wikipedia: string;
    }

    Extra: {
        Description: string;
        Images: [
            {
                image: string | null;
            }
        ]
        Videos: [
            {
                video: string | null;
            }
        ]
        DLCS: [
            {
                name: string;
                discount: boolean;
                discountPrice: string[];
                originalDiscountPrices: string[];
                price: string;
            }
        ]
    }

    Requirements: {
        Maximum: [
            {
                Req: string;
            }
        ]

        Minimum: [
            {
                Req: string;
            }
        ]
        Requirements: [
            {
                Req: string;
            }
        ]
    }
}


interface gameKeywords {
   keyword: string;
}


interface MainType {
    games: GameProps[] | undefined,
    setGames: React.Dispatch<React.SetStateAction<GameProps[] | undefined>>;
}


const MainContext = createContext<MainType | undefined>(undefined);

export const useMain = (): MainType => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [games, setGames] = useState<Array<GameProps>>()

    const { api } = useApi()


    const getShowCaseGames = async () => {
        try {
            const response = await fetch(api + '/getShowcase', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'bypass-tunnel-reminder': 'anyvalue',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
          //  console.log(data)
            setGames(data)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        getShowCaseGames()
    }, [])


    const value = {
        games,
        setGames
    };

    return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};