import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat=Montserrat({
  subsets:["latin"],
   variable:'--font-mont'
})
export default function App({ Component, pageProps }: AppProps) {
  const router=useRouter()
  return(
    <>
    <Head>
    <meta  name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
  <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
    <NavBar/>
    <AnimatePresence initial={false} mode="wait" >
  <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
  <Footer/>
  </main>
  </>
  
  )
}
