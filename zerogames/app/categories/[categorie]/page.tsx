import React from 'react'
import styles from './page.module.css'

//components
import CategoryGames from './CategoryGames/CategoryGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface CategoryProps {
    params: { categorie: string }
}

export default function page({ params }: CategoryProps) {
    return (
        <GamePage singles={false} category={params.categorie}>
            <CategoryGames params={params} />
        </GamePage>
    )
}
