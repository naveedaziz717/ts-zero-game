'use client'

import React, { useEffect } from 'react'

import { useSearch } from '@/app/States/Search/SearchState'

interface PageProps {
    params: { search: string }
}

//components
import GamePages from '@/app/Small-Components/Pages/GamePages'

export default function SearchClient({ params }: PageProps) {

    const { getSearchGames, totalPages, games, setTotalPages, page, setPage } = useSearch()

    useEffect(() => {
        getSearchGames(params.search, 1)
        setTotalPages(1)
    }, [])

  return (
    <GamePages defaultPage='/' pushPage={params.search + '/'} onPageChange={setPage} page={page} count={totalPages} />
  )
}
