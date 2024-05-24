'use client'


import React, { useEffect } from 'react'


import { useNav } from '@/app/States/NavBar/NavState'
import { useMainGames } from '@/app/States/Games/MainGames'

import GamePages from '@/app/Small-Components/Pages/GamePages'

export default function MainGamesClient() {

    const { games, page, setPage, getGames, totalPages } = useMainGames()

    const {setNav, setCategory, setKeyword} = useNav()

    useEffect(() => {
        getGames(1)
        setPage(1)

        setNav('Home')
        setCategory('')
        setKeyword('')
    }, [])

  return (
    <GamePages defaultPage='/' pushPage='/all/' onPageChange={setPage} page={page} count={totalPages} />
  )
}
