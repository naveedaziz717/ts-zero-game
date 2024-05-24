

import React, { useState } from 'react'
import styles from './page.module.css'

//components
import ShowcaseNav from './ShowcaseNav/ShowcaseNav'
import RandomImg from '../../Small-Components/Hexogan/RandomImg'

//Utils
import api from '@/app/Utils/getAPi'


interface GameProps {
    General: {
        Title: string;
        Link: string;
        imgSrc: string;
        GamePrice: string | null;
        DiscountOriginalPrice: string | null;
        FinalPrice: string | null;
        gameDiscount: boolean | null;
        Keywords: gamesKeywords[]

    }

    About: {
        Description: string;
        Wikipedia: string;
    }

    Extra: {
        Description: string;
        Images: gameImages[]
        Videos: gameVideos[]
        DLCS: gameDLCS[]
    }

    Requirements: {
        Maximum: Maximum[]
        Minimum: Minimum[]
        Requirements: Requirements[]
    }
}

interface gamesKeywords {
    keyword: string;
}

interface gameVideos {
    video: string;
}

interface gameImages {
    image: string;
}

interface Requirements {
    req: string;
}

interface Minimum {
    Req: string;
}

interface Maximum {
    Req: string;
}

interface gameDLCS {
    name: string;
    discount: false;
    originalDiscountPrices: string[]
    discountPrice: string[]
    price: string;
}



async function getShowcaseGames() {
    const response = await fetch(api + '/getShowcase', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();

}



export default async function Showcase() {


    const games : GameProps[] = await getShowcaseGames()

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
