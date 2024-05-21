'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

//providers
import { useRouter } from 'next/navigation'
import { useCategory } from '@/app/States/Category/CategoryState'
import { useSearch } from '@/app/States/Search/SearchState'
import { useNav } from '@/app/States/NavBar/NavState'

//components
import BoxIcon from '@/app/Small-Components/BoxIcon/BoxIcon'

//icons
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";

export default function Navbar() {

    const { categories } = useCategory()
    const { setSearching, searchValue, isFocused } = useSearch()

    const { nav, setNav, category, setCategory } = useNav()


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
            setSearching(false)
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
            setSearching(false)
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
                <img alt='Logo' src={logo}></img>
            </div>

            {isCategories &&
                <div className={styles.allcat} onMouseLeave={() => {
                    setCategories(false)
                    if (searchValue !== '' && isFocused) {
                        setSearching(true)
                    }

                }} onMouseOver={() => [keepCategory()]} >
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Action' ? '#1a9fff' : '', fontWeight: category === 'Action' ? '500' : '' }}
                    >Action</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Survival' ? '#1a9fff' : '', fontWeight: category === 'Survival' ? '500' : '' }}
                    >Survival</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Open World' ? '#1a9fff' : '', fontWeight: category === 'Open World' ? '500' : '' }}
                    >Open World</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Horror' ? '#1a9fff' : '', fontWeight: category === 'Horror' ? '500' : '' }}
                    >Horror</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Adventure' ? '#1a9fff' : '', fontWeight: category === 'Adventure' ? '500' : '' }}
                    >Adventure</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Indie' ? '#1a9fff' : '', fontWeight: category === 'Indie' ? '500' : '' }}
                    >Indie</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Simulation' ? '#1a9fff' : '', fontWeight: category === 'Simulation' ? '500' : '' }}
                    >Simulation</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Racing' ? '#1a9fff' : '', fontWeight: category === 'Racing' ? '500' : '' }}
                    >Racing</p>
                </div>
            }

            {isKeywords &&
                <div onMouseLeave={() => {
                    setKeywords(false);
                    if (searchValue !== '' && isFocused) {
                        setSearching(true)
                    }
                }} onMouseOver={() => { keepKeywords(); }} className={styles.dropcategorie}>
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
                    color={nav === 'Home' ? '#1a9fff' : 'white'}
                    onClick={() => { router.push('/'); setNav('Home') }}
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
                    onHover={() => { setKeywords(true); setCategories(false); setSearching(false) }}
                    onUnHover={() => {
                        removeKeywords();
                        if (searchValue !== '' && isFocused) {
                            setSearching(true)
                        }
                    }}
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
                    color={nav === 'Categories' ? '#1a9fff' : 'white'}
                    onClick={() => { }}
                    onHover={() => { setCategories(true); setKeywords(false); setSearching(false) }}
                    onUnHover={() => {
                        removeCategory();
                        if (searchValue !== '' && isFocused) {
                            setSearching(true)
                        }
                    }}
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
                    color={nav === 'Multiplayer' ? '#1a9fff' : 'white'}
                    onClick={() => { router.push('/categories/Multiplayer'); setNav('Multiplayer') }}
                    nav={true}
                >
                    <FaGamepad />
                </BoxIcon>


            </div>

            <div className={styles.navbtn}>
                <BoxIcon
                    backgroundColor='rgba(103, 112, 123, 0.2)'
                    borderRadius='0.3em'
                    height='30px'
                    width='auto'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='600'
                    textTransform='uppercase'
                    iconFontSize='1.1rem'
                    transition='all 0.3s'
                    color='white'
                    title='ZeroGame API'
                >
                    <IoServer />
                </BoxIcon>

                <BoxIcon
                    backgroundColor='rgba(103, 112, 123, 0.2)'
                    borderRadius='0.3em'
                    height='30px'
                    width='auto'
                    paddingLeft='1.2em'
                    paddingRight='1.2em'
                    titleFontWeight='600'
                    textTransform='uppercase'
                    iconFontSize='1.1rem'
                    transition='all 0.3s'
                    color='white'
                    title='ZeroGame Script'
                >
                    <FaFileCode />
                </BoxIcon>
            </div>
        </div>
    )
}
