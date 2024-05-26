import React from 'react'


//components
import GamePage from '@/app/Global-Components/GamePage/GamePage'
import AllGames from './AllGames/AllGames'
import { Metadata, ResolvingMetadata } from 'next'

interface PageProps{
  params: {page : number}
}



export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: 'All Games' + ' Page ' + params.page,
    description: 'All Games',
    openGraph: {
      images: ['https://i.ibb.co/7tw599R/Untitled-design-3.png'],

    }
  }
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
