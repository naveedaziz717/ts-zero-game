'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

//providers
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

interface SearchType {
    getSearchGames: (keyword : string, page: number | undefined) => void;
    getSearchGamesNav: (keyword : string, page: number | undefined) => void;

    games: GameProps[] | undefined;
    navGames: GameProps[] | undefined;

    page: number;
    setPage: Dispatch<SetStateAction<number>>;

    setTotalPages: Dispatch<SetStateAction<number>>;
    totalPages: number;

    searchValue: string;
    setSearchValue:  Dispatch<SetStateAction<string>>;

    isFocused: boolean;
    setFocused: Dispatch<SetStateAction<boolean>>;

    isSearching: boolean;
    setSearching: Dispatch<SetStateAction<boolean>>;
}


const SearchContext = createContext<SearchType | undefined>(undefined);

export const useSearch = (): SearchType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { api } = useApi()

    const [games, setGames] = useState<Array<GameProps>>()
    const [navGames, setNavGames] = useState<Array<GameProps>>()
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(10)

    const [searchValue, setSearchValue] = useState<string>('')
    const [isFocused, setFocused] = useState<boolean>(false)
    const [isSearching, setSearching] = useState<boolean>(false)

    const getSearchGames = async (keyword: string, page: number | undefined) => {

        if (page === undefined) {
            page = 1
        }

        try {
            const response = await fetch(api + '/getSearchGames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword, page })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            //console.log(data)
            setGames(data.games)
            setTotalPages(data.totalPages)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    };

    const getSearchGamesNav = async (keyword: string, page: number | undefined) => {

        if (page === undefined) {
            page = 1
        }

        try {
            const response = await fetch(api + '/getSearchGames', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'bypass-tunnel-reminder': 'anyvalue',
                },
                body: JSON.stringify({ keyword, page })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            //console.log(data)
            setNavGames(data.games)

        } catch (error) {
            //console.error('Error fetching data:', error.message);
        }
    };




    const value = {
        getSearchGames,
        games,
        page,
        setPage,
        totalPages,
        setTotalPages,


        getSearchGamesNav,
        navGames,

        searchValue,
        setSearchValue,

        isFocused,
        setFocused,

        isSearching,
        setSearching,
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};