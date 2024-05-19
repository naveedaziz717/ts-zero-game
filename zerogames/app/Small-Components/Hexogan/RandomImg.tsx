import React from 'react';
import styles from './style.module.css';

interface RandomImgProps {
    width: string;
    height: string;
    borderRadius: string;
    imgSrc: string;
}

export default function RandomImg({ width, height, borderRadius, imgSrc }: RandomImgProps) {
    return (
        <div style={{ width, height, borderRadius }} className={styles.random}>
            <img src={imgSrc}></img>
        </div>
    );
}
