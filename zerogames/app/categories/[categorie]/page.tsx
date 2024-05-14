import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

//components
import GamePage from '@/app/Global-Components/GamePage/GamePage';
import CategorieGames from './GetCategorieGames/CategorieGames';

interface params {
  params: {
    categorie: string;
  }
}

export default function page({ params }: params) {
  return (
      <GamePage category={params.categorie} singles={false} >
        <CategorieGames />
      </GamePage>
  )
}
