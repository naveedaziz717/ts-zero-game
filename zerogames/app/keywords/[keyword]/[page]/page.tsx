import React from 'react'
import styles from './page.module.css'

//components
import PageKeywordsGame from './PageKeywordsGames/PageKeywordsGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface PageProps {
  params: { 
    keyword: string 
    page: number;

   }
}


export default function page({params} : PageProps) {
  return (
    <GamePage singles={true} theSingles={'keywords/' + decodeURIComponent(params.keyword)}>
      <PageKeywordsGame params={params} />
    </GamePage>
  )
}
