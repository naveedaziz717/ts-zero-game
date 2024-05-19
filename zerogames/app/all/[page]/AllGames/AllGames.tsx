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
                <GameBox 
                description={game.About.Description ? game.About.Description : game.Extra.Description ? game.Extra.Description :
                    "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."} 
                key={index} imgSrc={game.General.imgSrc} title={game.General.Title} />
               ))}
            </div>
            <GamePages defaultPage='/' pushPage='/all/' page={page} onPageChange={setPage} count={totalPages} />
        </>
    )
}
