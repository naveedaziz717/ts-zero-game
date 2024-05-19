'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

//components
import BoxIcon from '@/app/Small-Components/BoxIcon/BoxIcon';
import Arrow from '../CarusoComponents/Arrow/Arrow';
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar';

//icons
import { FaDownload } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

//providers
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
        Keywords: [{
            keyword: string;
        }]

    }

    About: {
        Description: string;
        Wikipedia: string;
    }

    Extra: {
        Description: string;
        Images: [
            {
                image: string | null;
            }
        ]
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

export default function Caruso() {

    const [page, setPage] = useState<number>(0)
    const [currentGame, setCurrentGame] = useState<GameProps>()

    const { games, setGames } = useCarusos()

    const [animation, setAnimation] = useState<boolean>(false)

    const intervalRef = useRef<NodeJS.Timeout>();



    const switchPage = (page: number) => {
        setPage(page)
        if (games) {
            setCurrentGame(games[page]);
        }
    }

    const nextPage = () => {
        if (page === 9) {
            setPage(0)
        } else {
            setPage(p => p + 1)
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (games) {
                    setPage((prevPage) => (prevPage + 1) % games.length);
                }
            }, 5000);
        }
    }

    const backPage = () => {
        if (page === 0) {
            setPage(9)
        } else {
            setPage(p => p - 1)
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (games) {
                    setPage((prevPage) => (prevPage + 1) % games.length);
                }
            }, 5000);
        }
    }

    useEffect(() => {
        if (games && page >= 0 && page < games.length) {
            setCurrentGame(games[page]);
        }
        setAnimation(true);
    }, [page, games]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (games) {
                setPage((prevPage) => (prevPage + 1) % games.length);
            }

        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [games]);

    const handleProgressBarClick = (pageNumber: number) => {
        switchPage(pageNumber);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (games) {
                    setPage((prevPage) => (prevPage + 1) % games.length);
                }
            }, 5000);
        }
    };

    const onAnimationEnd = () => {
        setAnimation(false)
    };


    return (
        <div className={styles.caruso}>
            <Arrow onClick={() => { backPage() }} left={true} />

            <div className={styles.middle}>
                <div className={styles.title}><p>FEATURED & RECOMMENDED</p></div>
                <div className={`${animation ? `${styles.image} ${styles.opac}` : styles.image}`} onAnimationEnd={onAnimationEnd}>
                    {currentGame?.Extra?.Images?.[0]?.image && (
                        <img src={currentGame.Extra.Images[0].image} alt="Game Extra Image" />
                    )}
                    <div className={styles.info}>
                        <div className={styles.theinfo}>
                            <h2 className={styles.infotitle}>{currentGame?.General.Title}</h2>
                            <p className={styles.infodesc}>
                                {currentGame?.About.Description ? currentGame.About.Description : 
                                currentGame?.Extra.Description ? currentGame.Extra.Description : 
                                "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."
                                }
                                </p>
                            <BoxIcon
                                backgroundColor='green'
                                width='120px'
                                height='30px'
                                title='View'
                                color='white'
                                borderRadius='0.3em'
                                transition='all 0.3s'
                            >
                                <FaDownload />
                            </BoxIcon>
                            <div className={styles.infoicon}>
                                <IoShieldCheckmarkSharp />
                            </div>
                        </div>
                    </div>
                </div>
                <ProgressBar page={page} setPage={handleProgressBarClick} count={10} />
            </div>

            <Arrow onClick={() => { nextPage() }} left={false} />
        </div >
    )
}
