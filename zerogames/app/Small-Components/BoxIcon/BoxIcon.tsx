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
    titleColor?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
}

export default function BoxIcon({ width, height, borderRadius, backgroundColor,
    title, children, border, titleColor, titleFontSize, titleFontWeight }: BoxIconProps) {
    return (
        <div className={styles.box}>
            <p style=
                {{
                    color: titleColor,
                    fontSize: titleFontSize,
                    fontWeight: titleFontWeight
                }}
            >{title}</p>
        </div>
    )
}
