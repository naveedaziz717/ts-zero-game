'use client'

import React from 'react'
import styles from './style.module.css'

//components
import GameBox from './GameBox/GameBox'
import GamePages from './Pages/GamePages'

import { useMainGames } from '@/app/States/Games/MainGames'

export default function Games() {


    const {games} = useMainGames()


    return (
        <>
            <div className={styles.games}>
                {games?.map((game, index) => (
                  <GameBox key={index} imgSrc={game.imgSrc}  title={game.title} />
                ))}
            </div>

            <GamePages count={1000}/>
        </>
    )
}
