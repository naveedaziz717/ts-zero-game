import React from 'react'
import styles from './page.module.css'

interface PageProps {
    params: {search: string}
}

export default function page({params} : PageProps) {
  return (
    <div>{params.search}</div>
  )
}
