import React from 'react'
import styles from './page.module.css'

//components
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import PageMultiplayerGames from './PageMultiplayerGames/PageMultiplayerGames'

interface PageProps{
    params: {page: number}
}


export default function page({params} : PageProps) {
  return (
    <GamePage singles={true} theSingles={'Multiplayer/'.toLocaleLowerCase() + params.page} >
    <PageMultiplayerGames params={params}/>
   </GamePage>
  )
}
