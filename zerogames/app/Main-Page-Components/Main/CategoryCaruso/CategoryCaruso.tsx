import React from 'react'
import styles from './page.module.css'

//components
import Arrow from '../CarusoComponents/Arrow/Arrow'
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar'

export default function CategoryCaruso() {
    return (
        <div className={styles.caruso}>
            <Arrow left={true} />
            <div className={styles.main}>
                <p>BROWSE BY CATEGORY</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <img src='https://wallpapercave.com/wp/wp9364714.jpg'></img>
                        <h2>Open World</h2>
                    </div>
                    <div className={styles.box}>
                        <img src='https://wallpapercave.com/wp/wp6436399.jpg'></img>
                        <h2>Horror</h2>
                    </div>
                    <div className={styles.box}>
                        <img src='https://wallpapercave.com/wp/wp4705314.jpg'></img>
                        <h2>Adventure</h2>
                    </div>
                    <div className={styles.box}>
                        <img src='https://wallpapercave.com/wp/wp7678946.jpg'></img>
                        <h2>Survival</h2>
                    </div>
                </div>
                <ProgressBar count={5} />
            </div>
            <Arrow left={false} />
        </div>
    )
}
