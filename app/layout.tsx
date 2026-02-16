import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["cyrillic", "latin"],
  display: "swap"
});

const IbmPlexMono = IBM_Plex_Mono({
  variable : "--font-ibm-plex-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "MacKlosky.com",
  description: "Mac Klosky's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${IbmPlexMono.variable} `}>
      <body className={`antialiased hidden`}>
        {children}
      </body>
    </html>
  );
}
