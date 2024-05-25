'use client'

import React, { useEffect } from 'react'

import { useNav } from '@/app/States/NavBar/NavState'


export default function MainGameClient() {

    const { setCategory, setKeyword, setNav } = useNav()

    useEffect(() => {
        setNav('')
        setCategory('')
        setKeyword('')
    }, [])

    return (
        <></>
    )
}
