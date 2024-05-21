import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//providers
import { CarusosProvider } from "./States/Carusos/Carusos";
import { ApiProvider } from "./States/API/API";
import { MainProvider } from "./States/Main/MainState";
import { MainGamesProvider } from "./States/Games/MainGames";
import { CategoryProvider } from "./States/Category/CategoryState";
import { SearchProvider } from "./States/Search/SearchState";
import { NavProvider } from "./States/NavBar/NavState";

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

          <NavProvider>

            <MainProvider>
              <CarusosProvider>

                <MainGamesProvider>

                  <CategoryProvider>

                    <SearchProvider>

                      <Navbar />
                      <Showcase />
                      {children}
                      <Footer />

                    </SearchProvider>

                  </CategoryProvider>

                </MainGamesProvider>

              </CarusosProvider>
            </MainProvider>

          </NavProvider>

        </ApiProvider>

      </body>
    </html>
  );
}
