import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

interface TagProps {
    tag: string | undefined;
}

export default function Tag({ tag }: TagProps) {
    return (
        <Link className='link' href={'/keywords/' + tag}><div className={styles.tag}>
            <p>{tag}</p>
        </div></Link>
    )
}
