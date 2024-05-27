'use client'


import React, { useEffect } from 'react'
import styles from './styles.module.css'

//providers
import { useSearch } from '@/app/States/Search/SearchState'

//components
import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: {
        search: string;
        page: number;
    }
}

export default function PageSearchGames({ params }: PageProps) {

    const { getSearchGames, totalPages, games, page, setPage } = useSearch()

    useEffect(() => {
        getSearchGames(params.search, params.page)
        setPage(Number(params.page))
    }, [])

    const noDesc = "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."

    return (
        <>
            <div className={styles.games}>
            {!games && <p style={{color: 'white'}}>No search results were found.</p>}
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

            <GamePages defaultPage='/' pushPage={'/search/' + params.search +  '/'} onPageChange={setPage} page={page} count={totalPages} />
        </>
    )
}
