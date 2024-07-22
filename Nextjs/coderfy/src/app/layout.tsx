
import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'
import "./globals.css";
import Player from "./components/player/page";
import Menu from "./components/menu/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coderfy",
  description: "Download and listen to your favorite music without advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <ViewTransitions>
        <body className={inter.className}>
          <main className="flex flex-row flex-wrap items-stretch relative h-screen p-2 gap-2 rounded-sm">
            <div className="flex gap-2 w-screen h-[92%]">
              <Menu/> 
              {children}
            </div>
            <Player/>
          </main> 
        </body> 
      </ViewTransitions>
    </html>
  );
}
