'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';


interface NavType {
    nav: string;
    setNav: Dispatch<SetStateAction<string>>;

    category: string;
    setCategory: Dispatch<SetStateAction<string>>;

    keyword: string;
    setKeyword: Dispatch<SetStateAction<string>>;

    isKeywordRoute: boolean;
    setKeywordRoute: Dispatch<SetStateAction<boolean>>;
}


const NavContext = createContext<NavType | undefined>(undefined);

export const useNav = (): NavType => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [nav, setNav] = useState<string>('Home')
    const [category, setCategory] = useState<string>('')
    const [isKeywordRoute, setKeywordRoute] = useState<boolean>(false)
    const [keyword, setKeyword] = useState<string>('')

    useEffect(() => {
        if (nav !== 'Categories') {
            setCategory('')
        }
    }, [nav])

    useEffect(() => {
        if (nav !== 'Keywords') {
            setKeyword('')
        }
    }, [nav])

    useEffect(() => {
        if (isKeywordRoute) {
             setCategory('')
             setNav('')
        }
    }, [isKeywordRoute])

    const value = {
        nav,
        setNav,

        category,
        setCategory,

        keyword,
        setKeyword,

        isKeywordRoute,
        setKeywordRoute,
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};