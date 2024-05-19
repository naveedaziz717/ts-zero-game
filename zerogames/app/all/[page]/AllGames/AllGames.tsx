'use client'

import React, { useEffect } from 'react'

import styles from './page.module.css'

//components
import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

//providers
import { useMainGames } from '@/app/States/Games/MainGames'

interface PageProps{
    params: {page : number}
  }

export default function AllGames({params} : PageProps) {


    const { page, setPage, getGames, games, totalPages } = useMainGames()

    useEffect(() => {
        getGames(params.page)

        setPage(Number(params.page))
    }, [])

    return (
        <>
            <div className={styles.games}>
               {games?.map((game, index) => (
                <GameBox key={index} imgSrc={game.General.imgSrc} title={game.General.Title} />
               ))}
            </div>
            <GamePages defaultPage='/' pushPage='/all/' page={page} onPageChange={setPage} count={totalPages} />
        </>
    )
}
