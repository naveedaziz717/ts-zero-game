'use client'


import React, { useEffect } from 'react'

//providers
import { useMainGames } from '@/app/States/Games/MainGames'

//components
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface Props {
    params: { page: number }
}

export default function AllGamesClient({ params }: Props) {

    const { page, setPage, totalPages, getGames } = useMainGames()

    useEffect(() => {
        getGames(Number(params.page))
        setPage(Number(params.page))
    }, [])

    return (
        <GamePages defaultPage='/' pushPage='/all/' page={page} onPageChange={setPage} count={totalPages} />
    )
}
