import React from 'react'

//components
import GamePage from '../Global-Components/GamePage/GamePage'
import MultiplayerGames from './MultiplayerGames/MultiplayerGames'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ZeroGames Store',
    description: 'Multiplayer Games',
    openGraph: {
      images:['https://i.ibb.co/7tw599R/Untitled-design-3.png']
    }
  }

export default function page() {
    return (
       <GamePage singles={true} theSingles={'Multiplayer'.toLowerCase()} >
        <MultiplayerGames/>
       </GamePage>
    )
}
