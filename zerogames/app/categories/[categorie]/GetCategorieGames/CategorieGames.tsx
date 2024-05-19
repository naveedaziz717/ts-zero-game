'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface GameProps {
  imgSrc: string;
  title: string;
  link?: string;
}

export default function CategorieGames() {

  const [games, setGames] = useState<Array<GameProps>>([

  ])



  return (
    <>
      <div className={styles.games}>
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
        <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
      </div>
      <GamePages count={10}/>
    </>
  )
}
