import React from 'react'
import styles from './page.module.css'

//icons
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImPower } from "react-icons/im";



export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <img src='/images/Logo/logo.png'></img>
        <p>© 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
          VAT included in all prices where applicable.
        </p>
      </div>

      <div className={styles.hrefs}>
        <div className={styles.href}>
          <p>About Valve</p>
        </div>

        <div className={styles.href}>
          <p>Jobs</p>
        </div>

        <div className={styles.href}>
          <p>Steam Work</p>
        </div>

        <div className={styles.href}>
          <p>Support</p>
        </div>

        <div className={styles.href}>
          <p>Gift Cards</p>
        </div>

        <div style={{borderRight: '0px'}} className={styles.href}>
          <p>Steam</p>
        </div>
        
      </div>
    </div>
  )
}
