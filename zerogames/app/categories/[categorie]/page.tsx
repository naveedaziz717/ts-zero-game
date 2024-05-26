import React from 'react'
import styles from './page.module.css'

//components
import CategoryGames from './CategoryGames/CategoryGames'
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import { Metadata, ResolvingMetadata } from 'next'

interface CategoryProps {
    params: { categorie: string }
}

export async function generateMetadata(
    { params }: CategoryProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
  
    return {
      title: decodeURIComponent(params.categorie),
      description: decodeURIComponent(params.categorie) + ' Games',
      openGraph: {
        images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],
  
      }
    }
  }
  

export default function page({ params }: CategoryProps) {
    return (
        <GamePage singles={false} category={params.categorie}>
            <CategoryGames params={params} />
        </GamePage>
    )
}
