import React from 'react'
import styles from './page.module.css'

//components
import LittleNav from '@/app/Small-Components/LittleNav/LittleNav'
import Tag from '@/app/Small-Components/Tag/Tag'

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
        Maximum: [
            {
                Req: string;
            }
        ]

        Minimum: [
            {
                Req: string;
            }
        ]
        Requirements: [
            {
                Req: string;
            }
        ]
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
                            <video controls autoPlay muted src={game.Extra.Videos[1].video}></video>
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
                                <p>{game.About.Description}</p>
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
        </div>
    )
}
