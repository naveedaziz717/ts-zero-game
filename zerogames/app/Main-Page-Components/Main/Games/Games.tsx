import React from 'react'
import styles from './style.module.css'

//components
import GameBox from './GameBox/GameBox'
import GamePages from './Pages/GamePages'

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

            <GamePages count={10}/>
        </>
    )
}
