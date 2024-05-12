import React, { ReactNode } from 'react'
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
    nav?: boolean;
}

export default function BoxIcon({ width, height, borderRadius, backgroundColor,
    title, children, border, titleFontWeight, 
    paddingLeft, paddingRight, textTransform, nav, transition, color, fontSize }: BoxIconProps) {
    return (
        <div style={{ width, height, borderRadius, backgroundColor, 
            border, paddingLeft, paddingRight, transition, color, fontSize }} 
        className={`${nav ? `${styles.box} ${styles.navhover}` : styles.box}`}>
            <span className={styles.icon}>{children}</span>
            <p style={{
                fontWeight: titleFontWeight,
                textTransform
            }}
            >{title}</p>
        </div>
    )
}
