import React from 'react'
import styles from './page.module.css'

interface TagProps {
    tag: string | undefined;
}

export default function Tag({ tag }: TagProps) {
    return (
        <div className={styles.tag}>
            <p>{tag}</p>
        </div>
    )
}
