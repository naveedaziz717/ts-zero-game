import React from 'react'
import styles from './page.module.css'

//components
import ShowcaseNav from './ShowcaseNav/ShowcaseNav'
import RandomImg from './Hexogan/RandomImg'

export default function Showcase() {
    return (
        <div className={styles.showcase}>
            <div className={styles.showvideo}>
                <video loop autoPlay muted src='/videos/Showcase/showcase.mp4'></video>
            </div>

            <div className={styles.main}>
                <ShowcaseNav />
                <div className={styles.random}>
                    <div className={styles.first}>
                        <div className={styles.first1}>
                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/uwp/uwp4255255.jpeg'
                            />

                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp1810408.jpg'
                            />
                        </div>

                        <div className={styles.first1}>
                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp13119966.jpg'
                            />

                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp7340931.jpg'
                            />
                        </div>
                    </div>

                    <div className={styles.middle}>
                        <RandomImg
                            borderRadius='1em'
                            width='480px'
                            height='350px'
                            imgSrc='https://wallpapercave.com/uwp/uwp4228497.jpeg'
                        />
                    </div>

                    <div className={styles.last}>
                        <div className={styles.last1}>
                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp5912983.png'
                            />

                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp13384112.jpg'
                            />
                        </div>
                        <div className={styles.last1}>
                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp13152896.jpg'
                            />

                            <RandomImg
                                borderRadius='1em'
                                width='180px'
                                height='150px'
                                imgSrc='https://wallpapercave.com/wp/wp3628771.jpg'
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
