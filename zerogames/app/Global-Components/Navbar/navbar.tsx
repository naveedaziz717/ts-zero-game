'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

//providers
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
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {

    const { categories } = useCategory()
    const { setSearching, searchValue, isFocused } = useSearch()

    const { nav, setNav, category, setCategory, keyword, setKeyword, } = useNav()

    const [mobileNav, setMobileNav] = useState<boolean>(false)
    const [mobileKeywords, setMobileKeywords] = useState<boolean>(false)
    const [mobileCategories, setMobileCategories] = useState<boolean>(false)

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

    useEffect(() => {
        const body = document.querySelector('body');

        if (mobileNav) {
            body!.style.overflowY = 'hidden'
        } else {
            body!.style.overflowY = ''
        }
    }, [mobileNav])

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
        <>
            <div className={`${mobileNav ? `${styles.mobilenav} ${styles.mobnav}` : styles.mobilenav}`}>
                <div onClick={() => { router.push('/'); setNav('Home'); setMobileNav(false); setCategory('') }} className={styles.mobilebox}>
                    <p style={{ color: nav === 'Home' ? '#1a9fff' : 'white' }}>Home</p>
                </div>

                <div onClick={() => { setMobileKeywords(p => !p) }} className={styles.mobilebox}>
                    <p style={{ color: nav === 'Keywords' ? '#1a9fff' : 'white' }}>Keywords</p>
                    <IoIosArrowDown className={`${mobileKeywords ? `${styles.mobilearrow} ${styles.mobarrow}` : styles.mobilearrow}`} />
                </div>


                <div className={`${mobileKeywords ? `${styles.mobilekeywords} ${styles.mobilekey}` : styles.mobilekeywords}`}>
                    {categories?.map((cat, index) => (
                        <div key={index} className={styles.cat}>
                            {categoryGroups[index]?.map((category, groupIndex) => (
                                <React.Fragment key={groupIndex}>
                                    <p onClick={() => { router.push('/keywords/' + category); setNav('Keywords'); setKeywords(false); setMobileNav(false) }}
                                        style={{ color: keyword === category ? '#1a9fff' : '' }}
                                    >{category}</p>
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>


                <div onClick={() => { setMobileCategories(p => !p) }} className={styles.mobilebox}>
                    <p style={{ color: nav === 'Categories' ? '#1a9fff' : 'white' }}>Categories</p>
                    <IoIosArrowDown className={`${mobileCategories ? `${styles.mobilearrow} ${styles.mobarrow}` : styles.mobilearrow}`} />
                </div>

                <div className={`${mobileCategories ? `${styles.mobilecategories} ${styles.mobilecat}` : styles.mobilecategories}`}>

                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Action' ? '#1a9fff' : '', fontWeight: category === 'Action' ? '500' : '' }}
                    >Action</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Survival' ? '#1a9fff' : '', fontWeight: category === 'Survival' ? '500' : '' }}
                    >Survival</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Open World' ? '#1a9fff' : '', fontWeight: category === 'Open World' ? '500' : '' }}
                    >Open World</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Horror' ? '#1a9fff' : '', fontWeight: category === 'Horror' ? '500' : '' }}
                    >Horror</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Adventure' ? '#1a9fff' : '', fontWeight: category === 'Adventure' ? '500' : '' }}
                    >Adventure</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Indie' ? '#1a9fff' : '', fontWeight: category === 'Indie' ? '500' : '' }}
                    >Indie</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Simulation' ? '#1a9fff' : '', fontWeight: category === 'Simulation' ? '500' : '' }}
                    >Simulation</p>
                    <p onClick={(e) => { router.push('/categories/' + e.currentTarget.innerText); setMobileNav(false); setCategories(false); setCategory(e.currentTarget.innerText) }}
                        style={{ color: category === 'Racing' ? '#1a9fff' : '', fontWeight: category === 'Racing' ? '500' : '' }}
                    >Racing</p>
                </div>


                <div onClick={() => { router.push('/multiplayer'); setNav('Multiplayer'); setMobileNav(false); setCategory('') }} className={styles.mobilebox}>
                    <p style={{ color: nav === 'Multiplayer' ? '#1a9fff' : 'white' }}>Multiplayer</p>
                </div>

                <div className={styles.mobilebox}>
                    <p>Zerogame API</p>
                </div>

                <div className={styles.mobilebox}>
                    <p>Zerogame Script</p>
                </div>
            </div >


            {mobileNav && <div onClick={() => { setMobileNav(false) }} className={styles.blank}></div>}



            <div className={styles.navbar}>

                <div className={styles.menu}>
                    <IoMdMenu onClick={() => { setMobileNav(true); window.scroll(0, 0) }} className={styles.menuicon} />
                </div>




                <div className={styles.logo}>
                    <img onClick={() => { router.push('/') }} alt='Logo' src={logo}></img>
                </div>


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
                                            <p onClick={() => { router.push('/keywords/' + category); setNav('Keywords'); setKeywords(false) }}
                                                style={{ color: keyword === category ? '#1a9fff' : '' }}
                                            >{category}</p>
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
                        onClick={() => { router.push('/'); setNav('Home'); setCategory('') }}
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
                        color={nav === 'Keywords' ? '#1a9fff' : 'white'}
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

                    <div className={styles.thecatdiv}>
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

                    </div>

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
                        onClick={() => { router.push('/multiplayer'); setNav('Multiplayer'); setCategory('') }}
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
        </>
    )
}
