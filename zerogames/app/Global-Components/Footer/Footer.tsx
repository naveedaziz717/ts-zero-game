import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <Link className='link' href='/'><img src='/images/Logo/logo.png'></img></Link>
        <p>© 2024 ZeroGames Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
        </p>
      </div>

      <div className={styles.hrefs}>
        <div className={styles.href}>
          <p><a href='https://github.com/unknownbulgarian' target='_blank' className='link' style={{color: 'white'}}>GitHub</a></p>
        </div>

        <div className={styles.href}>
          <p><a href='https://www.instagram.com/dn8.sw/' target='_blank' className='link' style={{color: 'white'}}>Instagram</a></p>
        </div>
      </div>
    </div>
  )
}
