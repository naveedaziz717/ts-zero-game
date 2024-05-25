import React from 'react'
import styles from './page.module.css'

//components
import Caruso from '../../Global-Components/Caruso/Caruso'
import Banner from '@/app/Small-Components/Banner/Banner'
import SpecialCaruso from '../../Global-Components/SpecialCaruso/SpecialCaruso'
import CategoryCaruso from '../../Global-Components/CategoryCaruso/CategoryCaruso'
import Games from './Games/Games'

export default function MainShow() {
    return (
        <div className={styles.main}>
            <div className={styles.caruso}>
                <Caruso />
            </div>


            <div className={styles.caruso}>
                <SpecialCaruso />
            </div>

            <div className={styles.caruso}>
                <CategoryCaruso />
            </div>

            <div className={styles.games}>
                <Games />
            </div>

        </div>
    )
}
