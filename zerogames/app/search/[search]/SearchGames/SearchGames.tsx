import React, { useEffect } from 'react'
import styles from './page.module.css'

import api from '@/app/Utils/getAPi'

//components
import SearchClient from './Client/Client'
import GameBox from '@/app/Small-Components/GameBox/GameBox'

interface PageProps {
    params: { search: string }
}

interface theGames {
    games: GameProps[]
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
        Images: gameImages[]
        Videos: gameVideos[]
        DLCS: gameDLCS[]
    }

    Requirements: {
        Maximum: Maximum[]
        Minimum: Minimum[]
        Requirements: Requirements[]
    }
}

interface gamesKeywords {
    keyword: string;
}

interface gameVideos {
    video: string;
}

interface gameImages {
    image: string;
}

interface Requirements {
    req: string;
}

interface Minimum {
    Req: string;
}

interface Maximum {
    Req: string;
}

interface gameDLCS {
    name: string;
    discount: false;
    originalDiscountPrices: string[]
    discountPrice: string[]
    price: string;
}

async function getSearchGames (keyword: string, page: number | undefined)  {
    if (page === undefined) {
        page = 1
    }

    try {
        const response = await fetch(api + '/getSearchGames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ keyword, page })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json()

    } catch (error) {
        //console.error('Error fetching data:', error.message);
    }
};

export default async function SearchGames({ params }: PageProps) {


    const games: theGames = await getSearchGames(params.search, 1)


    const noDesc = "The developers unfortunately didn't provide any description for this game, leaving potential players without information about its features, gameplay, or storyline."

    return (
        <>
            <div className={styles.games}>
                {games && games.games.length < 1 && <p style={{ color: 'white' }}>No search results were found.</p>}
                {games?.games.map((game, index) => (
                    <GameBox
                        description={game.About.Description ? game.About.Description : game.Extra.Description ? game.Extra.Description : noDesc}
                        key={index}
                        imgSrc={game.General.imgSrc}
                        title={game.General.Title}
                        isDiscount={game.General.gameDiscount}
                        discountOriginalPrice={game.General.DiscountOriginalPrice}
                        finalPrice={game.General.FinalPrice}
                        gamePrice={game.General.GamePrice}
                        keyword1={game.General.Keywords[0].keyword}
                        keyword2={game.General.Keywords[1].keyword}
                    />
                ))}
            </div>
            <SearchClient params={params} />
        </>
    )
}
