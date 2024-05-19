import React from 'react'
import styles from './page.module.css'

interface GameBoxProps {
    imgSrc: string;
    title: string;
}

export default function GameBox({ imgSrc, title }: GameBoxProps) {
    return (
        <div className={styles.box}>
            <img src={imgSrc}></img>
            <h2>{title}</h2>
        </div>
    )
}
