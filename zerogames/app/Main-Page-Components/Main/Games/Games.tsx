'use client'

import React, { useEffect } from 'react'
import styles from './style.module.css'

//providers
import { useNav } from '@/app/States/NavBar/NavState'
import { useMainGames } from '@/app/States/Games/MainGames'

//components
import GameBox from '../../../Small-Components/GameBox/GameBox'
import GamePages from '../../../Small-Components/Pages/GamePages'


export default function Games() {


    const { games, page, setPage, getGames, totalPages } = useMainGames()

    const {setNav, setCategory, setKeyword} = useNav()

    useEffect(() => {
        getGames(1)
        setPage(1)

        setNav('Home')
        setCategory('')
        setKeyword('')
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

            <GamePages defaultPage='/' pushPage='/all/' onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}
