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

    const noDesc = "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."

    return (
        <>
            <div className={styles.games}>
               {games?.map((game, index) => (
               <GameBox
               description={game.About.Description ? game.About.Description : game.Extra.Description ? game.Extra.Description : noDesc}
               key={index}
               imgSrc={game.General.imgSrc}
               title={game.General.Title}
               isDiscount={game.General.gameDiscount}
               discountOriginalPrice={game.General.DiscountOriginalPrice}
               finalPrice={game.General.FinalPrice}
               gamePrice={game.General.GamePrice}
               keyword1={game.General.Keywords[0].keyword}
               keyword2={game.General.Keywords[1].keyword}
           />
               ))}
            </div>
            <GamePages defaultPage='/' pushPage='/all/' page={page} onPageChange={setPage} count={totalPages} />
        </>
    )
}
