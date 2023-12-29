import "@/components/global.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Navigation } from "@/components/Navigation/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quentin LAO",
  description: "Quentin LAO - Software Engineer",
  openGraph: {
    title: "Quentin LAO",
  },
  metadataBase: "http://sasak.vercel.app", // Add this line
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='smooth-scroll'>
      <head>
        {/* SEO meta tags */}
        <meta name='keywords' content='quentin lao, software, engineer, frontend, backend, fullstack, cto' />
        <meta name='author' content='Quentin LAO' />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
