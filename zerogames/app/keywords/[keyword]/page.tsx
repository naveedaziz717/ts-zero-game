import React from 'react'
import styles from './page.module.css'
import type { Metadata, ResolvingMetadata } from 'next'

//components
import KeywordsGame from './KeywordsGames/KeywordsGame'
import GamePage from '@/app/Global-Components/GamePage/GamePage'

interface PageProps {
  params: { keyword: string }
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: decodeURIComponent(params.keyword),
    description: decodeURIComponent(params.keyword) + ' Games',
    openGraph: {
      images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],

    }
  }
}



export default function page({ params }: PageProps) {
  return (
    <GamePage singles={true} theSingles={'keywords/' + decodeURIComponent(params.keyword)}>
      <KeywordsGame params={params} />
    </GamePage>
  )
}
