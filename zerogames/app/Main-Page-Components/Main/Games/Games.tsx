'use client'

import React, { useEffect } from 'react'
import styles from './style.module.css'

//components
import GameBox from '../../../Small-Components/GameBox/GameBox'
import GamePages from '../../../Small-Components/Pages/GamePages'

import { useMainGames } from '@/app/States/Games/MainGames'

export default function Games() {


    const { games, page, setPage, getGames, totalPages } = useMainGames()

    useEffect(() => {
        getGames(1)
        setPage(1)
    }, [])


    return (
        <>
            <div className={styles.games}>
                {games?.map((game, index) => (
                    <GameBox description={game.About.Description ? game.About.Description : game.Extra.Description ? game.Extra.Description :
                        "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."}  key={index} imgSrc={game.General.imgSrc} title={game.General.Title} />
                ))}
            </div>

            <GamePages defaultPage='/' pushPage='/all/' onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}
