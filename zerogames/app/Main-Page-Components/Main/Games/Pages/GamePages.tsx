'use client'

import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'

interface GamePagesProps {
  count: number; 
  page: number;
  pushPage: string;  
  defaultPage: string;
  onPageChange: (page: number) => void;

}

export default function GamePages({ count, page, onPageChange, pushPage, defaultPage }: GamePagesProps) {

  const router = useRouter()

  const range = 3; 

  const getPages = () => {
    const pages = [];
 
    const start = Math.max(1, page - range);
    const end = Math.min(count, page + range);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.pages}>

      <button
        onClick={() => {onPageChange(1); router.push(defaultPage)}}
        disabled={page === 1}
        className={styles.page}
      >
        Home
      </button>

 
      <button
        onClick={() => {onPageChange(page - 1); router.push(pushPage + (page - 1))}}
        disabled={page === 1}
        className={styles.page}
      >
        Previous
      </button>


      {getPages().map((pg) => (
        <div
          key={pg}
          onClick={() => {onPageChange(pg); router.push(pushPage + pg);}}
          className={styles.page}
          style={{ backgroundColor: page === pg ? 'white' : '', color: page === pg ? 'black' : '' }}
        >
          <p>{pg}</p>
        </div>
      ))}


      <button
        onClick={() => {onPageChange(page + 1); router.push(pushPage + (page + 1))}}
        disabled={page === count}
        className={styles.page}
      >
        Next
      </button>


      <button
        onClick={() => {onPageChange(count); router.push(pushPage + count)}}
        disabled={page === count}
        className={styles.page}
      >
        Last
      </button>
    </div>
  );
}
