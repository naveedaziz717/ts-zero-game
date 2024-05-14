import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
//components
import MultiplayerGames from './MultiplayerGames/MultiplayerGames'

export default function page() {
    return (
        <div className={styles.main}>
            <p className={styles.categorie}>
                <Link href={'/'}><span className={styles.nav}>{'Home'}</span></Link> {' > '}
                <Link href={'/multiplayer'}><span className={styles.nav}>{'Multiplayer'}</span></Link>
            </p>

            <div className={styles.games}>
                <MultiplayerGames/>
            </div>

        </div>
    )
}
