import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

//components
import CategorieGames from './GetCategorieGames/CategorieGames';

interface params {
  params: {
    categorie: string;
  }
}

export default function page({ params }: params) {
  return (
    <div className={styles.main}>
      <p className={styles.categorie}>
        <Link href={'/'}><span className={styles.nav}>{'Home'}</span></Link> {' > '}
        <Link href={'/categories'}><span className={styles.nav}>{'Categories'}</span></Link> {' > '}
        <Link href={'/categories/' + params.categorie}><span className={styles.nav}>{params.categorie}</span></Link>
      </p>

      <div className={styles.games}>
        <CategorieGames />
      </div>
    </div>
  )
}
