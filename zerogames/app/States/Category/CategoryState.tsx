'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

import { useApi } from '../API/API';

interface CategoryType {
    getCategoryGames: (page: number | undefined, category: string) => void;
    categoryGames: GameProps[] | undefined;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;

    totalPages: number;
}

interface GameProps {

    General: {
        Title: string;
        Link: string;
        imgSrc: string;
        GamePrice: string | null;
        DiscountOriginalPrice: string | null;
        FinalPrice: string | null;
        gameDiscount: boolean | null;
        Keywords: gamesKeywords[]

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

interface gamesKeywords {
    keyword: string;
}


const CategoryContext = createContext<CategoryType | undefined>(undefined);

export const useCategory = (): CategoryType => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { api } = useApi()

    const [categoryGames, setCategoryGames] = useState<Array<GameProps>>()
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(10)

    const getCategoryGames = async (page: number | undefined, category: string) => {

        if (page === undefined) {
            page = 1;
        }

        try {
            const response = await fetch(api + '/getCategoryGames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ page, category })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            //console.log(data)
            setCategoryGames(data.data)
            setTotalPages(data.totalPages)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    }



    const value = {
        getCategoryGames,
        categoryGames,
        page,
        setPage,
        totalPages
    };

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};