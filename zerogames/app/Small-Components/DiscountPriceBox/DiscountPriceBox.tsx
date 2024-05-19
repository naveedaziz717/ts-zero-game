import React from 'react';
import styles from './page.module.css';

interface DiscountPriceBoxProps {
    width?: string;
    height: string;
    originalPrice: number;
    discountPrice: number;

    percentageFontSize: string;
    originalPriceFS: string;
    discountPriceFS: string;
}

export default function DiscountPriceBox({
    width,
    height,
    originalPrice,
    discountPrice,
    percentageFontSize,
    originalPriceFS,
    discountPriceFS
} : DiscountPriceBoxProps) {
    
    const percentage = ((originalPrice - discountPrice) / originalPrice * 100).toFixed(0);

    return (
        <div style={{
            width,
            height
        }} className={styles.box}>
            <div className={styles.percentage} style={{ fontSize: percentageFontSize }}>
               <p>{percentage}%</p>
            </div>

            <div className={styles.prices}>
                <p className={styles.originalprice} style={{ fontSize: originalPriceFS }}>{originalPrice.toFixed(2)}$</p>
                <p className={styles.discountprice} style={{ fontSize: discountPriceFS }}>{discountPrice.toFixed(2)}$</p>
            </div>
        </div>
    )
}
