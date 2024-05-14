import React from 'react'
import styles from './page.module.css'

interface GamePagesPropx {
    count: number;
    page?: number;
}

export default function GamePages({ count, page }: GamePagesPropx) {

    const boxes = Array.from({ length: count }, (_, index) => index);

    return (
        <div className={styles.pages}>

            {boxes.map((_, index) => (
                <div style={{ backgroundColor: index === page ? 'white' : '' }}   key={index} className={styles.page}>
                    <p>{index}</p>
                </div>
            ))}
        </div>
    )
}
