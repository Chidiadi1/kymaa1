import "@/styles/globals.css";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { Montserrat, Italiana } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat'
});

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-italiana'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`min-h-screen flex flex-col justify-center ${montserrat.variable} ${italiana.variable}`}>
      <Navbar />    
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  )
}