'use client'

import React, { useEffect } from 'react'

import styles from './page.module.css'

//components
import GameBox from '@/app/Main-Page-Components/Main/Games/GameBox/GameBox'
import GamePages from '@/app/Main-Page-Components/Main/Games/Pages/GamePages'

//providers
import { useMainGames } from '@/app/States/Games/MainGames'

interface PageProps{
    params: {page : number}
  }

export default function AllGames({params} : PageProps) {


    const { page, setPage, getGames, games } = useMainGames()

    useEffect(() => {
        getGames(params.page)

        setPage(Number(params.page))
    }, [])

    return (
        <>
            <div className={styles.games}>
               {games?.map((game, index) => (
                <GameBox imgSrc={game.imgSrc} title={game.title} />
               ))}
            </div>
            <GamePages defaultPage='/' pushPage='/all/' page={page} onPageChange={setPage} count={10} />
        </>
    )
}
