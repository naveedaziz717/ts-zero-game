import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

//components
import RecentGames from './RecentGames/RecentGames'

export default function page() {
    return (
        <div className={styles.main}>
            <p className={styles.categorie}>
                <Link href={'/'}><span className={styles.nav}>{'Home'}</span></Link> {' > '}
                <Link href={'/recent'}><span className={styles.nav}>{'Recent'}</span></Link>
            </p>

            <div className={styles.games}>
                <RecentGames />
            </div>

        </div>
    )
}
