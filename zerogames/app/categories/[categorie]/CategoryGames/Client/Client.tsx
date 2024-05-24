'use client'

import React, { useEffect } from 'react'

import { useCategory } from '@/app/States/Category/CategoryState'
import { useNav } from '@/app/States/NavBar/NavState'

import GamePages from '@/app/Small-Components/Pages/GamePages'

interface CategoryProps {
    params: { categorie: string }
  }
  

export default function CategoryGamesClient({params} : CategoryProps) {

    const { getCategoryGames, page, setPage, totalPages } = useCategory()

    const { setNav, setCategory, setKeyword } = useNav()

    useEffect(() => {
        setPage(1)
        getCategoryGames(1, params.categorie)
      
        setNav('Categories')
        setCategory(params.categorie)
        setKeyword('')
      }, [])
  return (
    <GamePages defaultPage='/' pushPage={'/categories/' + params.categorie + '/'} onPageChange={setPage} page={page} count={totalPages} />
  )
}
