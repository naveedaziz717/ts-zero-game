import React, { ReactNode } from 'react'
import styles from './page.module.css'

//components
import LittleNav from '@/app/Small-Components/LittleNav/LittleNav'

interface GamePageProps {
    children: ReactNode
    singles: boolean;
    theSingles?: string;
    category?: string;
}


export default function GamePage({ children, singles, theSingles, category }: GamePageProps) {
    return (
            <div className={styles.main}>
                <LittleNav singles={singles} theSingles={theSingles} category={category} />
                <div className={styles.games}>
                    {children}
                </div>
            </div>
    )
}
