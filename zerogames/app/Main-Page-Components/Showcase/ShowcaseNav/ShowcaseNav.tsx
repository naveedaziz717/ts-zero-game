'use client'

import React from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

//providers
import { useSearch } from '@/app/States/Search/SearchState'

//components
import InputIcon from '@/app/Small-Components/InputIcon/InputIcon'
import DiscountPriceBox from '@/app/Small-Components/DiscountPriceBox/DiscountPriceBox'

//icons
import { FaSearch } from "react-icons/fa";

export default function ShowcaseNav() {

  const router = useRouter()

  const { games, getSearchGames, isSearching, setSearching, setSearchValue } = useSearch()

  const disableOnSearch = () => {
    setTimeout(() => {
      setSearching(false)
    }, 100);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.hrefs}>
        <p>New & Worthy</p>
        <p>Safety Rates</p>
        <p>Top Websites</p>
        <p>Untrusted Websites</p>
      </div>

      <div className={styles.search}>
        <InputIcon
          type='text'
          borderRadius='0.3em'
          title='Search...'
          width='230px'
          height='26px'
          color='white'
          titleColor='white'
          backColor='rgba(38, 60, 119, 0.884)'
          onFocus={(e) => {
            if(e.currentTarget.value !== '') {
              setSearching(true)
            }
          }}
          onInput={(e) => {
            getSearchGames(e.currentTarget.value, 1);
            setSearchValue(e.currentTarget.value)
            if (e.currentTarget.value !== '') {
              setSearching(true)
            } else {
              setSearching(false)
            }
          }}
          onBlur={() => { disableOnSearch() }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.keyCode === 13) {
              router.push('/search/' + e.currentTarget.value)
            }
          }}
        >
          <FaSearch />
        </InputIcon>

        {isSearching &&
          <div className={styles.searchgames}>

            {games?.map((game, index) => (
              <React.Fragment key={index}>
                <div className={styles.game}>
                  <img src={game.General.imgSrc}></img>
                  <div className={styles.info}>
                    <h2>{game.General.Title}</h2>
                    {game.General.gameDiscount &&
                      <DiscountPriceBox
                        height='20px'
                        originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                        discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                        discountPriceFS='0.8rem'
                        originalPriceFS='0.8rem'
                        percentageFontSize='1rem'
                      />
                    }
                    {!game.General.gameDiscount && <p className={styles.theprice}>{game.General.GamePrice}</p>}
                    {!game.General.gameDiscount && !game.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>}

      </div>
    </div>
  )
}
