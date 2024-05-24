'use client'


import React, { useEffect } from 'react'

import { useNav } from '@/app/States/NavBar/NavState'
import { useCategory } from '@/app/States/Category/CategoryState'
import GamePages from '@/app/Small-Components/Pages/GamePages'


interface CategoryProps {
    params: {
        page: number,
        categorie: string
    }
}


export default function CategoryGamesPageClient({params} : CategoryProps) {

    const { getCategoryGames, categoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, setCategory, setKeyword } = useNav()

    useEffect(() => {
        getCategoryGames(Number(params.page), params.categorie)
        setPage(Number(params.page))
        setNav('Categories')
        setCategory(params.categorie)
        setKeyword('')
    }, [])

  return (
    <GamePages defaultPage='/' pushPage={'/categories/' + params.categorie + '/'} onPageChange={setPage} page={page} count={totalPages} />
  )
}
