import React from 'react'
import styles from './page.module.css'

//components
import LittleNav from '@/app/Small-Components/LittleNav/LittleNav'
import Tag from '@/app/Small-Components/Tag/Tag'
import DiscountPriceBox from '@/app/Small-Components/DiscountPriceBox/DiscountPriceBox'

//icons
import { FaWindows } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

interface PageProps {
    params: { game: string }
}


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
        DLCS: [
            {
                name: string;
                discount: boolean;
                discountPrice: string[];
                originalDiscountPrices: string[];
                price: string;
            }
        ]
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





async function getGame(gameTitle: string) {
    const response = await fetch('http://localhost:3560/getGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ game: gameTitle }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
}

export default async function page({ params }: PageProps) {

    const game: GameProps = await getGame(params.game)


    return (
        <div className={styles.game}>
            <LittleNav singles={true} theSingles={'game/' + game.General.Title} />
            <div className={styles.main}>
                <img src={game.Extra.Images[0].image} className={styles.mainback}></img>
                <h1>{game.General.Title}</h1>
                <div className={styles.themain}>
                    <div className={styles.first}>
                        <div className={styles.video}>
                            <video loop controls autoPlay muted src={game.Extra.Videos[1].video}></video>
                        </div>
                        <div className={styles.extra}>
                            <div className={styles.extrabox}>
                                <img src={game.General.imgSrc}></img>
                            </div>
                            <div className={styles.extrabox}>
                                <img src={game.Extra.Images[0].image}></img>
                            </div>
                            <div className={styles.extrabox}>
                                <img src={game.Extra.Images[1].image}></img>
                            </div>
                            <div className={styles.extrabox}>
                                <img src={game.Extra.Images[2].image}></img>
                            </div>
                            <div className={styles.extrabox}>
                                <img src={game.Extra.Images[3].image}></img>
                            </div>
                        </div>
                    </div>

                    <div className={styles.second}>
                        <div className={styles.info}>
                            <img src={game.General.imgSrc}></img>
                            <div className={styles.description}>
                                <p>{game.Extra.Description}</p>
                            </div>
                            <div className={styles.keywords}>
                                {game.General.Keywords[0].keyword && <Tag tag={game.General.Keywords[0].keyword} />}
                                {game.General.Keywords[1].keyword && <Tag tag={game.General.Keywords[1].keyword} />}
                                {game.General.Keywords[2].keyword && <Tag tag={game.General.Keywords[2].keyword} />}
                                {game.General.Keywords[3].keyword && <Tag tag={game.General.Keywords[3].keyword} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.down}>
                <div className={styles.downfirst}>
                    <div className={styles.buy}>
                        {game.General.GamePrice === 'Free to Play' && <h2>Download {game.General.Title}</h2>}
                        {game.General.GamePrice !== 'Free to Play' && <h2>Buy {game.General.Title}</h2>}
                        <div className={styles.buyicons}>
                            <FaWindows />
                            <FaSteam />
                            <FaApple />
                        </div>

                        <div className={styles.mainbuy}>
                            {game.General.GamePrice === 'Free to Play' && <button className={styles.freebtn}>Download</button>}
                            {game.General.GamePrice !== 'Free to Play' &&
                                <div className={styles.buybox}>
                                    <div className={styles.theprice}>
                                        {game.General.GamePrice ? <p style={{margin: '0'}}>{game.General.GamePrice}</p>
                                            : <>{game.General.gameDiscount ?
                                                <DiscountPriceBox
                                                    height='20px'
                                                    originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                                                    discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                                                    discountPriceFS='0.8rem'
                                                    originalPriceFS='0.8rem'
                                                    percentageFontSize='1rem'
                                                />
                                                :
                                                <p style={{margin: '0'}}>15.00$</p>}
                                            </>
                                        }
                                    </div>
                                    <div className={styles.card}>
                                        <p>Add To Card</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className={styles.about}>
                        <h2>About this game</h2>
                        <p>{game.Extra.Description}</p>
                        {game.About.Description &&
                            <>
                                <p>{game.About.Description}  <a target='_blank' href={game.About.Wikipedia}>Wikipedia</a></p>
                            </>
                        }


                    </div>

                    <div className={styles.specs}>
                        <h2>System Requirements</h2>
                        <div className={styles.thespecs}>
                            {game.Requirements.Requirements.length > 0 ?
                                <div className={styles.singlereq}>
                                    <h3>Minimum:</h3>
                                    {game.Requirements.Requirements.map((req, index) => (
                                        <p key={index}>{req.req}</p>
                                    ))}
                                </div>
                                :
                                <div className={styles.mainspecs}>
                                    <div className={styles.minspecs}>
                                        <h3>Minimum:</h3>
                                        {game.Requirements.Minimum.map((req, index) => (
                                            <p key={index}>{req.Req}</p>
                                        ))}
                                    </div>

                                    <div className={styles.maxspecs}>
                                        <h3>Recommended:</h3>
                                        {game.Requirements.Maximum.map((req, index) => (
                                            <p key={index}>{req.Req}</p>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
