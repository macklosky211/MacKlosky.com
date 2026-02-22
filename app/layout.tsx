import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Inter} from "next/font/google";
import "./globals.css";

const IbmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  display: "swap",    
  adjustFontFallback: false,
});

const large_text = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-large",
  preload: true,
  style: "normal",
  subsets: ["latin"],
  display: "swap",    
  adjustFontFallback: false,
});

const inter = Inter({
  variable: "--font-para",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  display: "swap",    
  adjustFontFallback: false,
});


export const metadata: Metadata = {
  title: "MacKlosky.com",
  description: "Mac Klosky's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={` ${large_text.variable} ${inter.variable} ${IbmPlexMono.variable} `}>
      <body className={`bg-linear-to-r to-[#2A3897] from-[#2A9789]`}>
        {children}
      </body>
    </html>
  );
}
