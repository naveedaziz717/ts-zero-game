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

interface GameProps {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}



export default function Caruso() {

    const [page, setPage] = useState<number>(0)
    const [currentGame, setCurrentGame] = useState<GameProps>()
    const [games, setGames] = useState<Array<GameProps>>()

    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        setGames([
            { title: 'Forza Horizon 6', description: 'Forza Horizon 6 is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Lego Pirates', description: 'Lego Pirates is cool', imgSrc: 'https://wallpapercave.com/wp/wp9533384.jpg' },
            { title: 'Lego Star Wars', description: 'Lego Star Wars is cool', imgSrc: 'https://wallpapercave.com/wp/wp6049945.jpg' },
            { title: 'Sonst of the Forest', description: 'Sonst of the Forest is cool', imgSrc: 'https://wallpapercave.com/wp/wp12152112.jpg' },
            { title: 'Forza Horizon 5', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Forza Horizon 6', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Forza Horizon 6', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Forza Horizon 6', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Forza Horizon 6', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
            { title: 'Forza Horizon 6', description: 'Forza is cool', imgSrc: 'https://wallpapercave.com/wp/wp11907420.jpg' },
        ])
    }, [])

    const switchPage = (page: number) => {
        setPage(page)
        if(games) {
            setCurrentGame(games[page]);
        }
    }

    useEffect(() => {
        if (games && page >= 0 && page < games.length) {
            setCurrentGame(games[page]);
        }
        console.log(currentGame)
    }, [page, games]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if(games) {
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
                if(games) {
                    setPage((prevPage) => (prevPage + 1) % games.length);
                }
            }, 5000);
        }
    };


    return (
        <div className={styles.caruso}>
            <Arrow left={true} />

            <div className={styles.middle}>
                <div className={styles.title}><p>FEATURED & RECOMMENDED</p></div>
                <div className={styles.image}>
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

            <Arrow left={false} />
        </div >
    )
}
