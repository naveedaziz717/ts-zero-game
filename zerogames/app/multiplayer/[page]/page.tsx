import React from 'react'
import styles from './page.module.css'

//components
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import PageMultiplayerGames from './PageMultiplayerGames/PageMultiplayerGames'
import { Metadata } from 'next'

interface PageProps {
  params: { page: number }
}

export const metadata: Metadata = {
  title: 'ZeroGames Store',
  description: 'Multiplayer Games',
  openGraph: {
    images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png']
  }
}

export default function page({ params }: PageProps) {
  return (
    <GamePage singles={true} theSingles={'Multiplayer/'.toLocaleLowerCase() + params.page} >
      <PageMultiplayerGames params={params} />
    </GamePage>
  )
}
