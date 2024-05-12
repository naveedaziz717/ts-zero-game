'use client'

import React from 'react'
import styles from './page.module.css'

//components
import BoxIcon from '@/app/Small-Components/BoxIcon/BoxIcon';
import Arrow from '../CarusoComponents/Arrow/Arrow';

//icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Caruso() {
    return (
        <div className={styles.caruso}>
              <Arrow left={true} />

            <div className={styles.middle}>
                <div className={styles.title}><p>FEATURED & RECOMMENDED</p></div>
                <div className={styles.image}>
                    <img src='https://wallpapercave.com/wp/wp11497733.png'></img>
                    <div className={styles.info}>
                        <div className={styles.theinfo}>
                            <h2 className={styles.infotitle}>Fifa 22</h2>
                            <p className={styles.infodesc}>FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Nintendo Switch, PlayStation 4</p>
                            <BoxIcon
                                backgroundColor='green'
                                width='120px'
                                height='30px'
                                title='View'
                                color='white'
                                borderRadius='0.3em'
                                transition='all 0.3s'
                            >
                                <FaDownload />
                            </BoxIcon>
                            <div className={styles.infoicon}>
                                <IoShieldCheckmarkSharp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.progress}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
            </div>

            <Arrow left={false} />
        </div >
    )
}
