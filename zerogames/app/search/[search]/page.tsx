import React from 'react'
import styles from './page.module.css'

//components
import SearchGames from './SearchGames/SearchGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import { Metadata, ResolvingMetadata } from 'next'

interface PageProps {
  params: { search: string }
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: 'Search: '+ params.search,
    description: 'You searched for: ' + params.search,
    openGraph: {
      images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],

    }
  }
}


export default function page({ params }: PageProps) {
  return (
    <GamePage singles={true} theSingles={'search/' + params.search}>
      <SearchGames params={params} />
    </GamePage>
  )
}
