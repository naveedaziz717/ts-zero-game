import React from 'react'
import styles from './style.module.css'

//components
import GameBox from './GameBox/GameBox'

export default function Games() {
    return (
        <>
            <div className={styles.games}>
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
                <GameBox imgSrc='https://wallpapercave.com/wp/wp11907420.jpg' title='Forza Horizon 6' />
            </div>

            <div className={styles.pages}>
                <div className={styles.page}>
                    <p>1</p>
                </div>

                <div className={styles.page}>
                    <p>2</p>
                </div>

                <div className={styles.page}>
                    <p>3</p>
                </div>

                <div className={styles.page}>
                    <p>4</p>
                </div>

                <div className={styles.page}>
                    <p>5</p>
                </div>

                <div className={styles.page}>
                    <p>6</p>
                </div>

                <div className={styles.page}>
                    <p>7</p>
                </div>

                <div className={styles.page}>
                    <p>8</p>
                </div>
            </div>
        </>
    )
}
