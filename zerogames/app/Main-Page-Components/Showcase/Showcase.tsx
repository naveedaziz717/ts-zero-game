'use client'



import React, { useState } from 'react'
import styles from './page.module.css'

//components
import ShowcaseNav from './ShowcaseNav/ShowcaseNav'
import RandomImg from '../../Small-Components/Hexogan/RandomImg'

//providers
import { useMain } from '@/app/States/Main/MainState'




export default function Showcase() {

    const {games, setGames} = useMain()


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

                            {games?.map((game, index) => (
                                <React.Fragment key={index}>
                                    {index <= 1 &&
                                        <RandomImg
                                            borderRadius='1em'
                                            width='280px'
                                            height='180px'
                                            imgSrc={game.General.imgSrc}
                                        />
                                    }
                                </React.Fragment>
                            ))}



                        </div>

                        <div className={styles.first1}>
                            {games?.map((game, index) => (
                                <React.Fragment key={index}>
                                    {index > 1 && index <= 3 &&
                                        <RandomImg
                                            borderRadius='1em'
                                            width='280px'
                                            height='180px'
                                            imgSrc={game.General.imgSrc}
                                        />
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className={styles.middle}>
                        {games?.map((game, index) => (
                            <React.Fragment key={index}>
                                {index === 4 &&
                                    <RandomImg
                                        borderRadius='1em'
                                        width='550px'
                                        height='320px'
                                        imgSrc={game.General.imgSrc}
                                    />
                                }
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={styles.last}>
                        <div className={styles.last1}>
                        {games?.map((game, index) => (
                                <React.Fragment key={index}>
                                    {index > 4 && index <= 6 &&
                                        <RandomImg
                                            borderRadius='1em'
                                            width='280px'
                                            height='180px'
                                            imgSrc={game.General.imgSrc}
                                        />
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                        <div className={styles.last1}>
                        {games?.map((game, index) => (
                                <React.Fragment key={index}>
                                    {index > 6 && index <= 8 &&
                                        <RandomImg
                                            borderRadius='1em'
                                            width='280px'
                                            height='180px'
                                            imgSrc={game.General.imgSrc}
                                        />
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
