'use client'

import React, { useEffect } from 'react'
import styles from './style.module.css'

//components
import GameBox from './GameBox/GameBox'
import GamePages from './Pages/GamePages'

import { useMainGames } from '@/app/States/Games/MainGames'

export default function Games() {


    const { games, page, setPage, getGames, totalPages } = useMainGames()

    useEffect(() => {
        getGames(1)
    }, [])


    return (
        <>
            <div className={styles.games}>
                {games?.map((game, index) => (
                    <GameBox key={index} imgSrc={game.imgSrc} title={game.title} />
                ))}
            </div>

            <GamePages defaultPage='/' pushPage='/all/' onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}
