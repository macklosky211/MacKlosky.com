import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Inter} from "next/font/google";
import "./globals.css";

const IbmPlexMono = IBM_Plex_Mono({
  variable : "--font-ibm-plex-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  adjustFontFallback: false
});

const large_text = Outfit({
  weight: ["400", "500", "600", "700", "800"],
  variable : "--font-large",
  preload: true,
  style: "normal",
  subsets: ["latin"],
  adjustFontFallback: false
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  adjustFontFallback: false
});


export const metadata: Metadata = {
  title: "MacKlosky.com",
  description: "Mac Klosky's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={` ${large_text.variable} ${inter.variable} ${IbmPlexMono.variable} `}>
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
