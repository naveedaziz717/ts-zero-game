'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

//components
import Arrow from '../CarusoComponents/Arrow/Arrow';
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar';


interface GameProps {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}


export default function SpecialCaruso() {

    const [page, setPage] = useState<number>(0)
    const [currentGames, setCurrentGames] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Call of Duty', description: 'Call of Duty is cool', imgSrc: 'https://wallpapercave.com/wp/wp1810408.jpg' },
        { title: 'Regular Show', description: 'Regural show is cool', imgSrc: 'https://wallpapercave.com/wp/wp12413294.jpg' },
        { title: 'CS:GO', description: 'CS:GO is cool', imgSrc: 'https://wallpapercave.com/wp/wp8745613.jpg' },
    ])

    const [part1Games, setPart1Games] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Call of Duty', description: 'Call of Duty is cool', imgSrc: 'https://wallpapercave.com/wp/wp1810408.jpg' },
        { title: 'Regular Show', description: 'Regural show is cool', imgSrc: 'https://wallpapercave.com/wp/wp12413294.jpg' },
        { title: 'CS:GO', description: 'CS:GO is cool', imgSrc: 'https://wallpapercave.com/wp/wp8745613.jpg' },
    ])

    const [part2Games, setPart2Games] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
    ])

    const [part3Games, setPart3Games] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
    ])

    const [part4Games, setPart4Games] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
    ])

    const [part5Games, setPart5Games] = useState<Array<GameProps>>([
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft', description: 'Minecraft is cool', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'Minecraft2', description: 'Minecraft is cool2', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
        { title: 'MinecraftF', description: 'Minecraft is coolF', imgSrc: 'https://wallpapercave.com/wp/wp13340609.jpg' },
    ])

    const [animation, setAnimation] = useState<boolean>(false)



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
        <div className={styles.thecaruso}>
            <div className={styles.caruso}>
                <Arrow onClick={() => { backPage() }} left={true} />

                {currentGames?.map((game, index) => (
                    <React.Fragment key={index}>
                        {index < 2 &&
                            <div className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img loading='lazy' src={game.imgSrc}></img>
                                <div className={styles.info}>
                                    <h2>{game.title}</h2>
                                    <p>{game.description}</p>
                                </div>
                            </div>
                        }


                    </React.Fragment>
                ))}

                <div className={styles.boxes}>
                    {currentGames?.map((game, index) => (
                        <React.Fragment key={index}>
                            {index === 2 &&
                                <div className={`${styles.box2} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                    <img loading='lazy' src={game.imgSrc}></img>
                                    <div className={styles.info2}>
                                        <h2>{game.title}</h2>
                                    </div>
                                </div>
                            }

                            {index === 3 &&
                                <div className={`${styles.box2} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                    <img loading='lazy' src={game.imgSrc}></img>
                                    <div className={styles.info2}>
                                        <h2>{game.title}</h2>
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
    )
}
