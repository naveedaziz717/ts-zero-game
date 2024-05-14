'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface CarusosType {

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




    const value = {
  
    };

    return <CarusosContext.Provider value={value}>{children}</CarusosContext.Provider>;
};