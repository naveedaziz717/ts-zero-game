'use client'


import React, { useEffect } from 'react'

import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: {
        keyword: string,
        page: number
    }
}



export default function KeywordsGamesPageClient({ params }: PageProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, category, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(Number(params.page))
        getCategoryGames(Number(params.page), params.keyword)

        setNav('Keywords')
        setKeyword(decodeURIComponent(params.keyword))
        setCategory('')
    }, [])


  return (
    <GamePages defaultPage='/' pushPage={'/keywords/' + params.keyword + '/'} onPageChange={setPage} page={page} count={totalPages} />
  )
}
