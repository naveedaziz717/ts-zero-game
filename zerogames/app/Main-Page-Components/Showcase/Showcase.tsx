import React from 'react'
import styles from './page.module.css'

//components
import ShowcaseNav from './ShowcaseNav/ShowcaseNav'

export default function Showcase() {
    return (
        <div className={styles.showcase}>
            <div className={styles.showvideo}>
                <video loop autoPlay muted src='/videos/Showcase/showcase.mp4'></video>
            </div>

            <div className={styles.main}>
                <ShowcaseNav />
            </div>
        </div>
    )
}
