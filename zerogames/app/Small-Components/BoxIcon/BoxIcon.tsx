import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './page.module.css'

interface BoxIconProps {
    width: string;
    height: string;
    borderRadius: string;
    backgroundColor: string;
    title: string;
    children: ReactNode;
    border?: string;
    fontSize?: string;
    color?: string;
    titleFontWeight?: string;
    paddingLeft?: string;
    paddingRight?: string;
    textTransform?: any;
    transition?: string;
    iconFontSize?: string;
    nav?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onHover?:  MouseEventHandler<HTMLDivElement>;
}

export default function BoxIcon({ width, height, borderRadius, backgroundColor,
    title, children, border, titleFontWeight, 
    paddingLeft, paddingRight, textTransform, nav, transition, color, fontSize, iconFontSize,
    onClick, onHover }: BoxIconProps) {
    return (
        <div onClick={onClick} onMouseOver={onHover} style={{ width, height, borderRadius, backgroundColor, 
            border, paddingLeft, paddingRight, transition, color, fontSize }} 
        className=
        {`${nav ? `${styles.box} ${styles.navhover}` : `${styles.box} ${styles.default}` }`}>
            <span style={{fontSize: iconFontSize}} className={styles.icon}>{children}</span>
            <p style={{
                fontWeight: titleFontWeight,
                textTransform
            }}
            >{title}</p>
        </div>
    )
}



