import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from 'next'

//components
import Showcase from "./Main-Page-Components/Showcase/Showcase";
import MainShow from "./Main-Page-Components/Main/Main";

export const metadata: Metadata = {
  title: 'ZeroGames API',
  description: 'ZeroGames offers a free API that provides real-time data from Steam, enabling developers to access the latest game information and statistics effortlessly.',
  openGraph: {
    images:['https://i.ibb.co/9H8W9Xm/Screenshot-2024-05-26-232327.png']
  }
}

export default function Home() {
  return (
    <>
      <MainShow />
    </>
  );
}
