import React from 'react'
import styles from './page.module.css'

//components
import LittleNav from '@/app/Small-Components/LittleNav/LittleNav'

interface PageProps {
    params: { game: string }
}


interface GameProps {
    General: {
        Title: string;
        Link: string;
        imgSrc: string;
        GamePrice: string | null;
        DiscountOriginalPrice: string | null;
        FinalPrice: string | null;
        gameDiscount: boolean | null;
        Keywords: gamesKeywords[]

    }

    About: {
        Description: string;
        Wikipedia: string;
    }

    Extra: {
        Description: string;
        Images: [
            {
                image: string | null;
            }
        ]
        Videos: [
            {
                video: string | null;
            }
        ]
        DLCS: [
            {
                name: string;
                discount: boolean;
                discountPrice: string[];
                originalDiscountPrices: string[];
                price: string;
            }
        ]
    }

    Requirements: {
        Maximum: [
            {
                Req: string;
            }
        ]

        Minimum: [
            {
                Req: string;
            }
        ]
        Requirements: [
            {
                Req: string;
            }
        ]
    }
}

interface gamesKeywords {
    keyword: string;
}


async function getGame(gameTitle: string) {
    const response = await fetch('http://localhost:3560/getGame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ game: gameTitle }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
}

export default async function page({ params }: PageProps) {

    const game: GameProps = await getGame(params.game)


    return (
        <div className={styles.game}>
            <LittleNav singles={true} theSingles={'game/' + game.General.Title} />
            <div className={styles.main}>
                <h1>{game.General.Title}</h1>
            </div>
        </div>
    )
}
