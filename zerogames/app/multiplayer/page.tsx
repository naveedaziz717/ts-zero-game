import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

//components
import GamePage from '../Global-Components/GamePage/GamePage'
import MultiplayerGames from './MultiplayerGames/MultiplayerGames'

export default function page() {
    return (
       <GamePage singles={true} theSingles='Multiplayer' >
        <MultiplayerGames/>
       </GamePage>
    )
}
