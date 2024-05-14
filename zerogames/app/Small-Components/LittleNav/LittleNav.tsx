'use client'


import React from 'react'
import styles from './page.module.css'

import { useRouter } from 'next/navigation'

interface LittleNavProps {
    singles: boolean;
    theSingles?: string;
    category?: string;
}

export default function LittleNav({ singles, theSingles, category }: LittleNavProps) {

    const router = useRouter()


    return (
        <p className={styles.categorie}>
            {singles &&
                <>
                    <span onClick={() => { router.push('/') }} className={styles.nav}>Home</span>{' > '}
                    <span onClick={() => { router.push('/' + theSingles?.toLowerCase()) }} className={styles.nav}>{theSingles}</span>
                </>
            }

            {!singles &&
                <>
                    <span onClick={() => { router.push('/') }} className={styles.nav}>Home</span>{' > '}
                    <span onClick={() => { router.push('/categories')}} className={styles.nav}>Categories</span>{' > '}
                    <span onClick={() => { router.push('/categories/' + category)}} className={styles.nav}>{category}</span>
                </>
            }
        </p>
    )
}
