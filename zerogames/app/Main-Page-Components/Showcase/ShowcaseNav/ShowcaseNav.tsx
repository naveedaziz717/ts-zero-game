import React from 'react'
import styles from './page.module.css'

//components
import InputIcon from '@/app/Small-Components/InputIcon/InputIcon'

//icons
import { FaSearch } from "react-icons/fa";

export default function ShowcaseNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.hrefs}>
        <p>New & Worthy</p>
        <p>Safety Rates</p>
        <p>Top Websites</p>
        <p>Untrusted Websites</p>
      </div>

      <div className={styles.search}>
        <InputIcon
        type='text'
        borderRadius='0.3em'
        title='Search...'
        width='230px'
        height='26px'
        color='white'
        titleColor='white'
        backColor='rgba(38, 60, 119, 0.884)'
        >
          <FaSearch />
        </InputIcon>
      </div>
    </div>
  )
}
