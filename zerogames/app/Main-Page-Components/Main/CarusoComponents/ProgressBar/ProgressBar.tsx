'use client'

import React from 'react';
import styles from './page.module.css'

interface ProgressBarProps {
    count: number; 
}

export default function ProgressBar({ count }: ProgressBarProps) {

    const boxes = Array.from({ length: count }, (_, index) => index);

    return (
        <div className={styles.progress}>
            {boxes.map((_, index) => (
                <div key={index} className={styles.box}></div>
            ))}
        </div>
    );
}
