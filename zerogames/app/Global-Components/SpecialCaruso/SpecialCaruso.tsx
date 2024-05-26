'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

//components
import Arrow from '../CarusoComponents/Arrow/Arrow';
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar';
import Tag from '@/app/Small-Components/Tag/Tag';
import DiscountPriceBox from '@/app/Small-Components/DiscountPriceBox/DiscountPriceBox';

//Providers
import { useCarusos } from '@/app/States/Carusos/Carusos';

interface GameProps {

    General: {
        Title: string;
        Link: string;
        imgSrc: string;
        GamePrice: string | null;
        DiscountOriginalPrice: string | null;
        FinalPrice: string | null;
        gameDiscount: boolean | null;
        Keywords: gameKeywords[]

    }

    About: {
        Description: string;
        Wikipedia: string;
    }

    Extra: {
        Description: string;
        Images: gameImages[],
        Videos: [
            {
                video: string | null;
            }
        ]
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

interface gameImages {
    image: string;
}

interface gameKeywords {
    keyword: string;
}

export default function SpecialCaruso() {

    const router = useRouter()

    const [page, setPage] = useState<number>(0)
    const [currentGames, setCurrentGames] = useState<Array<GameProps>>()

    const { specialGames, part1Games, part2Games, part3Games, part4Games, part5Games } = useCarusos()

    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        setCurrentGames(part1Games)
    }, [part1Games])



    const switchPage = (page: number) => {
        setPage(page)
    }


    const nextPage = () => {
        if (page === 4) {
            setPage(0)
        } else {
            setPage(p => p + 1)
        }
    }

    const backPage = () => {
        if (page === 0) {
            setPage(4)
        } else {
            setPage(p => p - 1)
        }
    }

    useEffect(() => {
        switch (page) {
            case 0:
                setCurrentGames(part1Games);
                break;
            case 1:
                setCurrentGames(part2Games);
                break;
            case 2:
                setCurrentGames(part3Games);
                break;
            case 3:
                setCurrentGames(part4Games);
                break;
            case 4:
                setCurrentGames(part5Games);
                break;
            default:
                setCurrentGames(part1Games);
                break;
        }
        setAnimation(true);
    }, [page]);

    const onAnimationEnd = () => {
        setAnimation(false)
    };

    return (
        <>



            <div className={styles.mobilecaruso}>
                <div className={styles.mobgames}>
                    {specialGames?.map((game, index) => (
                        <React.Fragment key={index}>

                                <div onClick={() => { router.push('/game/' + game.General.Title) }} className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                    {game?.Extra?.Images?.[0]?.image && (
                                        <img src={game.Extra.Images[0].image} alt="Game Extra Image" />
                                    )}
                                    <div className={styles.info}>
                                        <h2>{game.General.Title}</h2>
                                        <p className={styles.desc}>
                                            {game?.About.Description ? game.About.Description :
                                                game?.Extra.Description ? game.Extra.Description :
                                                    "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."
                                            }
                                        </p>
                                        <div className={styles.tags}>
                                            {game?.General.Keywords[0]?.keyword && <Tag tag={game?.General.Keywords[0]?.keyword} />}
                                            {game?.General.Keywords[1]?.keyword && <Tag tag={game?.General.Keywords[1]?.keyword} />}
                                            {game?.General.Keywords[2]?.keyword && <Tag tag={game?.General.Keywords[2]?.keyword} />}
                                            {game?.General.Keywords[3]?.keyword && <Tag tag={game?.General.Keywords[3]?.keyword} />}
                                            {game?.General.Keywords[4]?.keyword && <Tag tag={game?.General.Keywords[4]?.keyword} />}
                                        </div>

                                        <div className={styles.bottomcontent}>

                                            <div className={styles.price}>
                                                {game?.General.gameDiscount &&
                                                    <DiscountPriceBox
                                                        height='20px'
                                                        originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                                                        discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                                                        discountPriceFS='0.8rem'
                                                        originalPriceFS='0.8rem'
                                                        percentageFontSize='1rem'
                                                    />
                                                }
                                                {!game?.General.gameDiscount && <p className={styles.theprice}>{game?.General.GamePrice}</p>}
                                                {!game?.General.gameDiscount && !game?.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                                            </div>

                                        </div>

                                    </div>
                                </div>


                        </React.Fragment>
                    ))}

                </div>
            </div>

            {currentGames &&
                <div className={styles.thecaruso}>
                    <div className={styles.caruso}>
                        <Arrow onClick={() => { backPage() }} left={true} />

                        {currentGames?.map((game, index) => (
                            <React.Fragment key={index}>
                                {index < 2 &&
                                    <div onClick={() => { router.push('/game/' + game.General.Title) }} className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                        {game?.Extra?.Images?.[0]?.image && (
                                            <img src={game.Extra.Images[0].image} alt="Game Extra Image" />
                                        )}
                                        <div className={styles.info}>
                                            <h2>{game.General.Title}</h2>
                                            <p className={styles.desc}>
                                                {game?.About.Description ? game.About.Description :
                                                    game?.Extra.Description ? game.Extra.Description :
                                                        "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."
                                                }
                                            </p>
                                            <div className={styles.tags}>
                                                {game?.General.Keywords[0]?.keyword && <Tag tag={game?.General.Keywords[0]?.keyword} />}
                                                {game?.General.Keywords[1]?.keyword && <Tag tag={game?.General.Keywords[1]?.keyword} />}
                                                {game?.General.Keywords[2]?.keyword && <Tag tag={game?.General.Keywords[2]?.keyword} />}
                                                {game?.General.Keywords[3]?.keyword && <Tag tag={game?.General.Keywords[3]?.keyword} />}
                                                {game?.General.Keywords[4]?.keyword && <Tag tag={game?.General.Keywords[4]?.keyword} />}
                                            </div>

                                            <div className={styles.bottomcontent}>

                                                <div className={styles.price}>
                                                    {game?.General.gameDiscount &&
                                                        <DiscountPriceBox
                                                            height='20px'
                                                            originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                                                            discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                                                            discountPriceFS='0.8rem'
                                                            originalPriceFS='0.8rem'
                                                            percentageFontSize='1rem'
                                                        />
                                                    }
                                                    {!game?.General.gameDiscount && <p className={styles.theprice}>{game?.General.GamePrice}</p>}
                                                    {!game?.General.gameDiscount && !game?.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                }


                            </React.Fragment>
                        ))}

                        <div className={styles.boxes}>
                            {currentGames?.map((game, index) => (
                                <React.Fragment key={index}>
                                    {index === 2 &&
                                        <div onClick={() => { router.push('/game/' + game.General.Title) }} className={`${styles.box2} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                            {game?.Extra?.Images?.[0]?.image && (
                                                <img src={game.Extra.Images[0].image} alt="Game Extra Image" />
                                            )}
                                            <div className={styles.info2}>
                                                <h2>{game.General.Title}</h2>
                                            </div>

                                            <div className={styles.bottomcontent2}>

                                                <div className={styles.price}>
                                                    {game?.General.gameDiscount &&
                                                        <DiscountPriceBox
                                                            height='20px'
                                                            originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                                                            discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                                                            discountPriceFS='0.8rem'
                                                            originalPriceFS='0.8rem'
                                                            percentageFontSize='1rem'
                                                        />
                                                    }
                                                    {!game?.General.gameDiscount && <p className={styles.theprice}>{game?.General.GamePrice}</p>}
                                                    {!game?.General.gameDiscount && !game?.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                                                </div>

                                            </div>

                                        </div>
                                    }

                                    {index === 3 &&
                                        <div onClick={() => { router.push('/game/' + game.General.Title) }} className={`${styles.box2} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                            {game?.Extra?.Images?.[0]?.image && (
                                                <img src={game.Extra.Images[0].image} alt="Game Extra Image" />
                                            )}
                                            <div className={styles.info2}>
                                                <h2>{game.General.Title}</h2>
                                            </div>

                                            <div className={styles.bottomcontent2}>

                                                <div className={styles.price}>
                                                    {game?.General.gameDiscount &&
                                                        <DiscountPriceBox
                                                            height='20px'
                                                            originalPrice={parseFloat(game.General.DiscountOriginalPrice ?? "0")}
                                                            discountPrice={parseFloat(game.General.FinalPrice ?? "0")}
                                                            discountPriceFS='0.8rem'
                                                            originalPriceFS='0.8rem'
                                                            percentageFontSize='1rem'
                                                        />
                                                    }
                                                    {!game?.General.gameDiscount && <p className={styles.theprice}>{game?.General.GamePrice}</p>}
                                                    {!game?.General.gameDiscount && !game?.General.GamePrice && <p className={styles.theprice}>15,00$</p>}
                                                </div>

                                            </div>
                                        </div>
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                        <Arrow onClick={() => { nextPage() }} left={false} />
                    </div>
                    <ProgressBar page={page} setPage={switchPage} count={5} />
                </div>
            }

        </>
    )
}
