'use client'

import React, { useEffect } from 'react'

import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

import GamePages from '@/app/Small-Components/Pages/GamePages'




export default function ClientGamesMultiplayer() {

    const { getCategoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(1)
        getCategoryGames(1, 'Multiplayer')

        setNav('Multiplayer')
        setCategory('')
        setKeyword('')
    }, [])

    return (
        <GamePages defaultPage='/' pushPage='/multiplayer/' page={page} onPageChange={setPage} count={totalPages} />
    )
}
