'use client'

import React, { useEffect } from 'react'

import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: { page: number }
}


  


export default function MultiplayerGamesPageClient({ params }: PageProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, setCategory, setKeyword } = useNav()


    useEffect(() => {
        setPage(Number(params.page))
        getCategoryGames(Number(params.page), 'Multiplayer')

        setNav('Multiplayer')
        setCategory('')
        setKeyword('')
    }, [])

  return (
    <GamePages defaultPage='/' pushPage='/multiplayer/' page={page} onPageChange={setPage} count={totalPages} />
  )
}
