import React from 'react'
import styles from './page.module.css'

//components
import PageSearchGames from './PageSearchGames.tsx/PageSearchGames';
import GamePage from '@/app/Global-Components/GamePage/GamePage';
import { Metadata, ResolvingMetadata } from 'next';

interface PageProps {
    params: {
        search: string;
        page: number;
    }
}

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
  
    return {
      title: 'Search: '+ params.search + ' Page ' + params.page,
      description: 'You searched for: ' + params.search + ' Page ' + params.page,
      openGraph: {
        images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],
  
      }
    }
  }

export default function page({ params }: PageProps) {
    return (
        <GamePage singles={true} theSingles={'search/' + params.search + '/' + params.page}>
            <PageSearchGames params={params} />
        </GamePage>
    )
}
