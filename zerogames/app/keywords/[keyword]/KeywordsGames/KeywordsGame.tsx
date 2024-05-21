'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

//providers
import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

//components
import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: { keyword: string }
}


export default function KeywordsGame({ params }: PageProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, category, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(1)
        getCategoryGames(1, params.keyword)

        setNav('Keywords')
        setKeyword(decodeURIComponent(params.keyword))
        setCategory('')
    }, [])

    const noDesc = "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."


    return (
      <>
  
  
  
  
        <div className={styles.games}>
          {categoryGames?.map((game, index) => (
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
  
        <GamePages defaultPage='/' pushPage={ params.keyword.charAt(0).toUpperCase() + params.keyword.slice(1) + '/'} onPageChange={setPage} page={page} count={totalPages} />
      </>
    )
  }