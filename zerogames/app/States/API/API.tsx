'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';


interface ApiType {

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

     const [api, setApi] = useState('http://localhost:3560')



    const value = {
       
     
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};