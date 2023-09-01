import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <Layout>

        
        <title>title NeighborKim</title>
        <meta name="description" content="test content~!"></meta>
        <link rel="icon" href="/favicon.ico" />

        <h1>home 부분</h1>

        
        </Layout>

 

  )
}
