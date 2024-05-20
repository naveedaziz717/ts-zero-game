'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

//providers
import { useSearch } from '@/app/States/Search/SearchState'

//components
import GamePages from '@/app/Small-Components/Pages/GamePages'
import GameBox from '@/app/Small-Components/GameBox/GameBox'

interface PageProps {
    params: { search: string }
}

export default function SearchGames({ params }: PageProps) {

    const { getSearchGames, totalPages, games, setTotalPages, page, setPage } = useSearch()

    useEffect(() => {
        getSearchGames(params.search, 1)
        setTotalPages(1)
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

            <GamePages defaultPage='/' pushPage={params.search + '/'} onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}
