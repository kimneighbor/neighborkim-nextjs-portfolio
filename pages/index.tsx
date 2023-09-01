import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import Head from 'next/head'
import Hero from './components/home/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <Layout>

        <Head>
        <title>title NeighborKim</title>
        <meta name="description" content="test content~!"></meta>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero/>
        </Layout>
        

 

  )
}
