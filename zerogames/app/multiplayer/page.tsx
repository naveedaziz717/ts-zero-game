import React from 'react'

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
