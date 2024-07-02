'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import EaSports from "../icons/EaSports";
import { ToastContainer } from "react-toastify";
import React, { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "BBB Dynasty League - Invitational",
//   description: "BBB Dynasty League - Invitational",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main
          className="relative flex min-h-screen h-full flex-col items-center p-4 pt-48 md:p-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.contentapi.ea.com/content/dam/ea/college-football/college-football-25/images/2024/05/cfb25-hero-lg-homepage-dlx-xl-16x9.jpg.adapt.crop16x9.1920w.jpg')",
          }}
        >
          <audio ref={audioRef} src="audio/hype.mp3" autoPlay loop className="hidden" ></audio>
          <div className="absolute z-10 top-10 scale-75 md:scale-100" onClick={toggleAudio}>
            <EaSports textColor="white" logoColor="white" numbersColor="red"/>
          </div>
          {children}
        </main>
        <div className="absolute inset-0 bg-black min-h-screen opacity-50 h-full"></div>
      </body>
    </html>
  );
}
