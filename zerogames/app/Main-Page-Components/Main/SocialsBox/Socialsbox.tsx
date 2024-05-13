import React from 'react'
import styles from './page.module.css'

//icons
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Socialsbox() {
    return (
        <div className={styles.box}>
            <div className={styles.social}>
                <FaDiscord className={styles.icon} />
                <p>Discord</p>
            </div>

            <div className={styles.social}>
                <FaYoutube className={styles.icon} />
                <p>YouTube</p>
            </div>

            <div className={styles.social}>
                <FaInstagram className={styles.icon} />
                <p>Instagram</p>
            </div>
            
            <div className={styles.social}>
                <FaTwitter className={styles.icon} />
                <p>Twitter</p>
            </div>
        </div>
    )
}
