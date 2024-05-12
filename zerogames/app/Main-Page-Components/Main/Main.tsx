import React from 'react'
import styles from './page.module.css'

//components
import Caruso from './Caruso/Caruso'

export default function MainShow() {
    return (
        <div className={styles.main}>
            <div className={styles.caruso}>
                <Caruso />
            </div>
        </div>
    )
}
