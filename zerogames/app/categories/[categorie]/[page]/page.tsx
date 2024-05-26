import React from 'react'

//components
import PageCategoryGames from './PageCategoryGames/PageCategoryGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import { Metadata, ResolvingMetadata } from 'next'

interface categoryPageProps {
  params: {
    categorie: string,
    page: number
  }
}

export async function generateMetadata(
  { params }: categoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: decodeURIComponent(params.categorie) + ' Page ' + params.page,
    description: decodeURIComponent(params.categorie) + ' Games',
    openGraph: {
      images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],

    }
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
