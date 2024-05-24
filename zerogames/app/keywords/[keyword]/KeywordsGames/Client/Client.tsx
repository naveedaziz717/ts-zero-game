'use client'


import React, { useEffect } from 'react'

import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: { keyword: string }
}



export default function KeywordsGamesClient({ params }: PageProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, category, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(1)
        getCategoryGames(1, params.keyword)

        setNav('Keywords')
        setKeyword(decodeURIComponent(params.keyword))
        setCategory('')
    }, [])

  return (
    <GamePages defaultPage='/' pushPage={ params.keyword.charAt(0).toUpperCase() + params.keyword.slice(1) + '/'} onPageChange={setPage} page={page} count={totalPages} />
  )
}
