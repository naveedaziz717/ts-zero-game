import React from 'react';
import styles from './page.module.css';

interface GamePagesProps {
  count: number; // total number of pages
  page: number;  // current page
  onPageChange: (page: number) => void; // callback function to handle page change
}

export default function GamePages({ count, page, onPageChange }: GamePagesProps) {
  const range = 3; // Number of page numbers to show around the current page

  const getPages = () => {
    const pages = [];
    // Calculate start and end of the sliding window
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
        onClick={() => onPageChange(1)}
        disabled={page === 1}
        className={styles.page}
      >
        First
      </button>

 
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={styles.page}
      >
        Previous
      </button>


      {getPages().map((pg) => (
        <div
          key={pg}
          onClick={() => onPageChange(pg)}
          className={styles.page}
          style={{ backgroundColor: page === pg ? 'white' : '', color: page === pg ? 'black' : '' }}
        >
          <p>{pg}</p>
        </div>
      ))}


      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === count}
        className={styles.page}
      >
        Next
      </button>


      <button
        onClick={() => onPageChange(count)}
        disabled={page === count}
        className={styles.page}
      >
        Last
      </button>
    </div>
  );
}
