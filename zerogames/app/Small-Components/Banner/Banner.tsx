import React, { MouseEventHandler } from 'react'
import styles from './page.module.css'

interface BannerProps {
    width: string;
    height: string;
    borderRadius: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    filter?: string;
    imgSrc: string;
}

export default function Banner({ width, height, borderRadius, onClick, imgSrc, filter }: BannerProps) {
    return (
        <div style={{
            width,
            height,
            borderRadius
        }} onClick={onClick} className={styles.banner}>
            <img className={styles.bannerimage} style={{ filter: filter }} src={imgSrc}></img>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <img src='/Images/Logo/logo.png'></img>
                </div>
            </div>
        </div>
    )
}
