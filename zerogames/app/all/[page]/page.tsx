import React from 'react'


//components
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import AllGames from './AllGames/AllGames'

interface PageProps{
  params: {page : number}
}

export default function page({params} : PageProps) {
  return (
    <div>
      <GamePage singles={true}  theSingles={'all/' + params.page}>
        <AllGames params={params} />
      </GamePage>
    </div>
  )
}
