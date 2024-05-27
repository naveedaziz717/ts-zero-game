'use client'

import React, { useEffect } from 'react'

import { useSearch } from '@/app/States/Search/SearchState'

//components
import GameBox from '@/app/Small-Components/GameBox/GameBox'
import GamePages from '@/app/Small-Components/Pages/GamePages'

interface PageProps {
    params: {
        search: string;
        page: number;
    }
}


export default function SearchPageClient({ params }: PageProps) {

    const { getSearchGames, totalPages, games, page, setPage } = useSearch()

    useEffect(() => {
        getSearchGames(params.search, params.page)
        setPage(Number(params.page))
    }, [])

    return (
        <GamePages defaultPage='/' pushPage={'/search/' + params.search + '/'} onPageChange={setPage} page={page} count={totalPages} />
    )
}
