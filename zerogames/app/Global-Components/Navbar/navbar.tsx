'use client'

import React, { useRef, useState } from 'react'
import styles from './page.module.css'

import { useRouter } from 'next/navigation'

//components
import BoxIcon from '@/app/Small-Components/BoxIcon/BoxIcon'

//icons
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export default function Navbar() {

    const [isCategories, setCategories] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const removeCategorie = () => {
        timeoutRef.current = setTimeout(() => {
            setCategories(false)
        }, 500);
    }

    const keepCategorie = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const router = useRouter()

    const logo = '/images/logo/logo.png'

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>

            {isCategories &&
                <div onMouseLeave={() => { setCategories(false) }} onMouseOver={() => [keepCategorie()]} className={styles.dropcategorie}>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Open World</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Horror</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Adventure</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Indie</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Simulation</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Survival</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Racing</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText) }}>Action</p>
                </div>
            }

            <div className={styles.hrefs}>
                <BoxIcon
                    width='auto'
                    height='35px'
                    backgroundColor='transperent'
                    borderRadius='0.3em'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='500'
                    textTransform='uppercase'
                    title='Home'
                    transition='all 0.3s'
                    color='white'
                    onClick={() => { router.push('/') }}
                    nav={true}
                >
                    <FaHome />
                </BoxIcon>

                <BoxIcon
                    width='auto'
                    height='35px'
                    backgroundColor='transperent'
                    borderRadius='0.3em'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='500'
                    textTransform='uppercase'
                    title='Categories'
                    transition='all 0.3s'
                    color='white'
                    onHover={() => { setCategories(true) }}
                    onUnHover={() => { removeCategorie() }}
                    nav={true}
                >
                    <FaListUl />
                </BoxIcon>

                <BoxIcon
                    width='auto'
                    height='35px'
                    backgroundColor='transperent'
                    borderRadius='0.3em'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='500'
                    textTransform='uppercase'
                    title='Multiplayer'
                    transition='all 0.3s'
                    color='white'
                    onClick={() => { router.push('/categories/Multiplayer') }}
                    nav={true}
                >
                    <FaGamepad />
                </BoxIcon>

                <BoxIcon
                    width='auto'
                    height='35px'
                    backgroundColor='transperent'
                    borderRadius='0.3em'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='500'
                    textTransform='uppercase'
                    title='Recent'
                    transition='all 0.3s'
                    color='white'
                    onClick={() => { router.push('/recent') }}
                    nav={true}
                >
                    <FaUpload />
                </BoxIcon>
            </div>

            <div className={styles.navbtn}>
                <BoxIcon
                    backgroundColor='red'
                    borderRadius='0.3em'
                    height='40px'
                    width='auto'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='600'
                    textTransform='uppercase'
                    iconFontSize='1.1rem'
                    transition='all 0.3s'
                    color='white'
                    title='Join Discord'
                >
                    <FaDiscord />
                </BoxIcon>
            </div>
        </div>
    )
}
