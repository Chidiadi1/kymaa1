import { Raleway } from 'next/font/google';
import "@/styles/globals.css";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Component {...pageProps}/>;
      <Footer />
    </main>
  )
}