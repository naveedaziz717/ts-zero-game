import React from 'react'
import styles from './page.module.css'

//components
import PageSearchGames from './PageSearchGames.tsx/PageSearchGames';
import GamePage from '@/app/Global-Components/GamePage/GamePage';

interface PageProps {
    params: {
        search: string;
        page: number;
    }
}

export default function page({ params }: PageProps) {
    return (
        <GamePage singles={true} theSingles={'search/' + params.search + '/' + params.page}>
            <PageSearchGames params={params} />
        </GamePage>
    )
}
