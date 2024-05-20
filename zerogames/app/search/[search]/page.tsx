import React from 'react'
import styles from './page.module.css'

//components
import SearchGames from './SearchGames/SearchGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface PageProps {
  params: { search: string }
}

export default function page({ params }: PageProps) {
  return (
    <GamePage singles={true} theSingles={'search/' + params.search}>
      <SearchGames params={params} />
    </GamePage>
  )
}
