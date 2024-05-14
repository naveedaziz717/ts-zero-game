import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

//components
import GamePage from '../Global-Components/GamePage/GamePage'
import RecentGames from './RecentGames/RecentGames'

export default function page() {
    return (
        <GamePage singles={true} theSingles='Recent'>
            <RecentGames />
        </GamePage>
    )
}
