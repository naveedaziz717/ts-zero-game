'use client'


import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
//components
import Arrow from '../CarusoComponents/Arrow/Arrow'
import ProgressBar from '../CarusoComponents/ProgressBar/ProgressBar'


interface CategoryProps {
    imgSrc: string;
    title: string;
}

interface Category {
    first: CategoryProps;
    second: CategoryProps;
    third: CategoryProps;
    fourth: CategoryProps;
}

export default function CategoryCaruso() {

    const router = useRouter()

    const [page, setPage] = useState<number>(0)

    const [firstCategory, setFirstCategory] = useState<Category>({
        first: {
            imgSrc: 'https://wallpapercave.com/wp/wp9364714.jpg',
            title: 'Open World'
        },
        second: {
            imgSrc: 'https://wallpapercave.com/wp/wp6436399.jpg',
            title: 'Horror'
        },
        third: {
            imgSrc: 'https://wallpapercave.com/wp/wp4705314.jpg',
            title: 'Adventure'
        },
        fourth: {
            imgSrc: 'https://wallpapercave.com/wp/wp2966142.jpg',
            title: 'Indie'
        }
    })
    const [secondCategory, setSecondCategory] = useState<Category>({
        first: {
            imgSrc: 'https://wallpapercave.com/wp/wp7040898.jpg',
            title: 'Simulation'
        },
        second: {
            imgSrc: 'https://wallpapercave.com/wp/wp7678946.jpg',
            title: 'Survival'
        },
        third: {
            imgSrc: 'https://wallpapercave.com/wp/wp5313405.jpg',
            title: 'Racing'
        },
        fourth: {
            imgSrc: 'https://wallpapercave.com/wp/wp5294211.jpg',
            title: 'Action'
        }
    })

    const [animation, setAnimation] = useState<boolean>(false)


    const onAnimationEnd = () => {
        setAnimation(false)
    };



    const switchPage = (page: number) => {
        setPage(page)
    }


    const nextPage = () => {
        if (page === 2) {
            setPage(0)
        } else {
            setPage(p => p + 1)
        }
    }

    const backPage = () => {
        if (page === 0) {
            setPage(2)
        } else {
            setPage(p => p - 1)
        }
    }

    useEffect(() => {
       setAnimation(true)
    },[page])


    return (
        <div className={styles.caruso}>
            <Arrow onClick={() => { backPage() }} left={true} />
            <div className={styles.main}>
                <p>BROWSE BY CATEGORY</p>
                <div className={styles.boxes}>
                    {page === 0 ?
                        <>
                            <div onClick={() => {router.push('/categories/' + firstCategory?.first.title)}} className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={firstCategory?.first.imgSrc}></img>
                                <h2>{firstCategory?.first.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + firstCategory?.second.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={firstCategory?.second.imgSrc}></img>
                                <h2>{firstCategory?.second.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + firstCategory?.third.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={firstCategory?.third.imgSrc}></img>
                                <h2>{firstCategory?.third.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + firstCategory?.fourth.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={firstCategory?.fourth.imgSrc}></img>
                                <h2>{firstCategory?.fourth.title}</h2>
                            </div>
                        </>
                        :
                        <>
                            <div onClick={() => {router.push('/categories/' + secondCategory?.first.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={secondCategory?.first.imgSrc}></img>
                                <h2>{secondCategory?.first.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + secondCategory?.second.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={secondCategory?.second.imgSrc}></img>
                                <h2>{secondCategory?.second.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + secondCategory?.third.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={secondCategory?.third.imgSrc}></img>
                                <h2>{secondCategory?.third.title}</h2>
                            </div>
                            <div onClick={() => {router.push('/categories/' + secondCategory?.fourth.title)}}  className={`${styles.box} ${animation ? styles.opac : ''}`} onAnimationEnd={onAnimationEnd}>
                                <img alt='Category Image' src={secondCategory?.fourth.imgSrc}></img>
                                <h2>{secondCategory?.fourth.title}</h2>
                            </div>
                        </>
                    }

                </div>
                <ProgressBar page={page} setPage={switchPage} count={2} />
            </div>
            <Arrow onClick={() => { nextPage() }} left={false} />
        </div>
    )
}
