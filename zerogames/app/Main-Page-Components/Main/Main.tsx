import React from 'react'
import styles from './page.module.css'

//components
import Caruso from './Caruso/Caruso'
import Banner from '@/app/Small-Components/Banner/Banner'
import SpecialCaruso from './SpecialCaruso/SpecialCaruso'
import CategoryCaruso from './CategoryCaruso/CategoryCaruso'
import Games from './Games/Games'

export default function MainShow() {
    return (
        <div className={styles.main}>
            <div className={styles.caruso}>
                <Caruso />
            </div>

            <div className={styles.banner}>
                <Banner
                    width='900px'
                    height='200px'
                    borderRadius='0.3em'
                    imgSrc='https://wallpapercave.com/uwp/uwp3536520.jpeg'
                    filter='blur(4px) brightness(0.4)'
                />
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
