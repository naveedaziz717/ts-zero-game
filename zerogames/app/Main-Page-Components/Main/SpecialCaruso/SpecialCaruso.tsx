import React from 'react'
import styles from './page.module.css'

//components
import Arrow from '../CarusoComponents/Arrow/Arrow';
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar';


export default function SpecialCaruso() {
    return (
        <div className={styles.thecaruso}>
            <div className={styles.caruso}>
                <Arrow left={true} />
                <div className={styles.box}>
                    <img src='https://wallpapercave.com/wp/wp9533384.jpg'></img>
                    <div className={styles.info}>
                        <h2>Lego Pirates</h2>
                        <p>Lego Pirates of the Caribbean:
                            The Video Game is a Lego-themed
                            action-adventure video game developed by
                            Traveller's Tales and published by Disney Interactive</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src='https://wallpapercave.com/wp/wp6049945.jpg'></img>
                    <div className={styles.info}>
                        <h2>Lego Star Wars</h2>
                        <p>Lego Star Wars is based on the Star Wars saga and franchise.
                            The product line directly focuses on the Star Wars characters
                            from the films and TV Series, with the exception of a few special characters.</p>
                    </div>
                </div>
                <div className={styles.boxes}>
                    <div className={styles.box2}>
                        <img src='https://wallpapercave.com/wp/wp12152112.jpg'></img>
                        <div className={styles.info2}>
                            <h2>Sonst Of The Forest</h2>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <img src='https://wallpapercave.com/wp/wp12803694.png'></img>
                        <div className={styles.info2}>
                            <h2>Counter Strike 2</h2>
                        </div>
                    </div>
                </div>

                <Arrow left={false} />
            </div>
            <ProgressBar count={10} />
        </div>
    )
}
