# ZeroGames

> [!NOTE]
> If the API is **offline**, please visit the ZeroGames **steam game scrapper script**

[Steam Game Scrapper](https://github.com/unknownbulgarian/Steam-Game-Scrapper)

[ZeroGames Official Website]()

ZeroGames offers a **free API** that provides **real-time** data from Steam, enabling developers to access the **latest game information** and statistics effortlessly.

## API Information

### What do you get?

- [x] The link for the game

- [x] The title

- [x] The main game image

- [x] The game discount if there is any

- [x] The discount original price

- [x] The final price

- [x] The game price if there is no discount

- [x] 20 Keywords about the game

- [x] Google description about the game

- [x] Wikipedia link

- [x] Extra description from steam

- [x] The game DLCS

- [x] The dlcs name

- [x] The dlcs discount price if there is any

- [x] The dlcs discount original price

- [x] The final discount price

- [x] The dlcs price if there is no discount

- [x] 19 extra images about the game

- [x] 1 video about the game

- [x] The system requirements for the game

- [x] The minimum requirements

- [x] The recommended requirements

**The final json**

```
 const game = {
        General: {
            Link: newUrl,
            Title: title,
            imgSrc: imgSrc,
            gameDiscount: originalDiscountPrice?.isDiscount,
            GamePrice: gamePrice,
            DiscountOriginalPrice: originalDiscountPrice?.DiscountOriginalPrice,
            FinalPrice: finalPrice,
            Keywords: []
        },
        About: {
            Description: description?.desc,
            Wikipedia: description?.wikiLink,
        },
        Extra: {
            Description: extraDescription,
            DLCS: [],
            Images: [],
            Videos: [],
        },
        Requirements: {
            Requirements: [],
            Minimum: [],
            Maximum: [],
        },
    };
```

### How to use it?

> [!IMPORTANT]
> The API will be released soon!

# For the nerds

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
