'use client'

import React from 'react'
import styles from './style.module.css'

//components
import GameBox from './GameBox/GameBox'
import GamePages from './Pages/GamePages'

import { useMainGames } from '@/app/States/Games/MainGames'

export default function Games() {


    const {games, page, setPage} = useMainGames()


    return (
        <>
            <div className={styles.games}>
                {games?.map((game, index) => (
                  <GameBox key={index} imgSrc={game.imgSrc}  title={game.title} />
                ))}
            </div>

            <GamePages defaultPage='/' pushPage='/all/' onPageChange={setPage}  page={page} count={1000}/>
        </>
    )
}
