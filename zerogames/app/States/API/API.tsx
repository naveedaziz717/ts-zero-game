'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface ApiType {
   api: string;
}


const ApiContext = createContext<ApiType | undefined>(undefined);

export const useApi = (): ApiType => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

     const [api, setApi] = useState('https://zerogames.loca.lt')



    const value = {
       api
     
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};