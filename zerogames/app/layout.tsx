import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//providers
import { CarusosProvider } from "./States/Carusos";
import { ApiProvider } from "./States/API/API";

//components
import Navbar from "./Global-Components/Navbar/navbar";
import Footer from "./Global-Components/Footer/Footer";
import Showcase from "./Main-Page-Components/Showcase/Showcase";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ApiProvider>

          <CarusosProvider>

            <Navbar />
            <Showcase />
            {children}
            <Footer />

          </CarusosProvider>

        </ApiProvider>

      </body>
    </html>
  );
}
