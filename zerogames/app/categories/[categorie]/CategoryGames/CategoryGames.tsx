'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

//providers
import { useCategory } from '@/app/States/Category/CategoryState'


interface CategoryProps {
  params: {categorie: string}
}

//components

export default function CategoryGames({params} : CategoryProps) {

  const {} = useCategory()

  useEffect(() => {

  },[])


  return (
    <div>CategoryGames</div>
  )
}
