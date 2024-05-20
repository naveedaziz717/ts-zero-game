import React from 'react'
import styles from './page.module.css'

//components
import CategoryGames from './CategoryGames/CategoryGames'

interface CategoryProps {
    params: { categorie: string }
}

export default function page({ params }: CategoryProps) {
    return (
        <div className={styles.main}>
            <CategoryGames params={params} />
        </div>
    )
}
