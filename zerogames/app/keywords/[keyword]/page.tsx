import React from 'react'
import styles from './page.module.css'

//components
import KeywordsGame from './KeywordsGames/KeywordsGame'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface PageProps {
  params: { keyword: string }
}


export default function page({params} : PageProps) {
  return (
    <GamePage singles={true} theSingles={'keywords/' + decodeURIComponent(params.keyword)}>
      <KeywordsGame params={params} />
    </GamePage>
  )
}
