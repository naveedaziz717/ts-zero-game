'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface NavType {
    nav: string;
    setNav: Dispatch<SetStateAction<string>>;

    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
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


    const value = {
        nav,
        setNav,

        category,
        setCategory
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};