'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

//providers
import { useRouter } from 'next/navigation'
import { useCategory } from '@/app/States/Category/CategoryState'

//components
import BoxIcon from '@/app/Small-Components/BoxIcon/BoxIcon'

//icons
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export default function Navbar() {

    const { categories } = useCategory()


    const [isKeywords, setKeywords] = useState(false)
    const [isCategories, setCategories] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const categoryRef = useRef<NodeJS.Timeout | null>(null);

    const removeKeywords = () => {
        timeoutRef.current = setTimeout(() => {
            setKeywords(false)
        }, 100);
    }

    const keepKeywords = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const removeCategory = () => {
        categoryRef.current = setTimeout(() => {
            setCategories(false)
        }, 100);
    }

    const keepCategory = () => {
        if (categoryRef.current) {
            clearTimeout(categoryRef.current)
        }
    }

    useEffect(() => {

        const body = document.querySelector('body');

        if (isKeywords) {
            body!.style.overflowY = 'hidden'
        } else {
            body!.style.overflowY = ''
        }
    }, [isKeywords])

    const router = useRouter()

    const logo = '/images/logo/logo.png'

    const categoriesPerPage = 15;
    const categoryGroups: string[][] = [];

    if (categories) {
        for (let i = 0; i < categories?.length; i += categoriesPerPage) {
            categoryGroups.push(categories.slice(i, i + categoriesPerPage));
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo}></img>
            </div>

            {isCategories &&
                <div className={styles.allcat}  onMouseLeave={() => { setCategories(false) }} onMouseOver={() => [keepCategory()]} >
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Action</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Survival</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Open World</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Horror</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Adventure</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Indie</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Simulation</p>
                    <p onClick={(e) => {router.push('/categories/' + e.currentTarget.innerText); setCategories(false)}}>Racing</p>
                </div>
            }

            {isKeywords &&
                <div onMouseLeave={() => { setKeywords(false) }} onMouseOver={() => [keepKeywords()]} className={styles.dropcategorie}>
                    <div className={styles.cats}>

                        {categories?.map((cat, index) => (
                            <div key={index} className={styles.cat}>
                                {categoryGroups[index]?.map((category, groupIndex) => (
                                    <React.Fragment key={groupIndex}>
                                        <p onClick={() => { router.push('/categories/' + category); setKeywords(false) }}>{category}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}


                    </div>
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
                    title='Keywords'
                    transition='all 0.3s'
                    color='white'
                    onHover={() => { setKeywords(true); setCategories(false) }}
                    onUnHover={() => { removeKeywords(); }}
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
                    title='Categories'
                    transition='all 0.3s'
                    color='white'
                    onClick={() => { }}
                    onHover={() => { setCategories(true); setKeywords(false) }}
                    onUnHover={() => { removeCategory() }}
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
