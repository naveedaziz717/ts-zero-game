import React from 'react';
import styles from './style.module.css';

interface HexagonProps {
    width: string;
    height: string;
}

export default function Hexagon({ width, height }: HexagonProps) {
    const hexagonStyle = {
        '--hexagon-width': width,
        '--hexagon-height': height
    } as React.CSSProperties;

    return (
        <div style={hexagonStyle} className={styles.hexagon}>
            
        </div>
    );
}
