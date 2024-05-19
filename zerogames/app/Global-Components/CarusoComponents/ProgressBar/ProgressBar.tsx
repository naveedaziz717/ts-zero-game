'use client'

import React, { MouseEventHandler } from 'react';
import styles from './page.module.css'

interface ProgressBarProps {
    count: number;
    page: number;
    setPage: (page: number) => void;
}

export default function ProgressBar({ count, setPage, page }: ProgressBarProps) {

    const boxes = Array.from({ length: count }, (_, index) => index);

    return (
        <div className={styles.progress}>
            {boxes.map((_, index) => (
                <div style={{backgroundColor: index === page ? 'white' : ''}} onClick={() => {setPage(index)}} key={index} className={styles.box}></div>
            ))}
        </div>
    );
}
