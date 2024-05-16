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
import { useCarusos } from '@/app/States/Carusos';


interface GameProps {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}


export default function Caruso() {

    const [page, setPage] = useState<number>(0)
    const [currentGame, setCurrentGame] = useState<GameProps>()

    const {games, setGames} = useCarusos()

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
                    <img src={currentGame?.imgSrc}></img>
                    <div className={styles.info}>
                        <div className={styles.theinfo}>
                            <h2 className={styles.infotitle}>{currentGame?.title}</h2>
                            <p className={styles.infodesc}>{currentGame?.description}</p>
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
