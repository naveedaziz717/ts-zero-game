import React from 'react'

//components
import PageCategoryGames from './PageCategoryGames/PageCategoryGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface categoryPageProps {
  params: {
    categorie: string,
    page: number
  }
}

export default function page({ params }: categoryPageProps) {
  return (
    <div>
      <GamePage singles={false} category={params.categorie + '/' + params.page} >
        <PageCategoryGames params={params} />
      </GamePage>
    </div>
  )
}
