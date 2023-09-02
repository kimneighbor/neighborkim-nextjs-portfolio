import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/layout'
import Head from 'next/head'
import Hero from './components/home/hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

        <title>title NeighborKim</title>
        <meta name="description" content="test content~!"></meta>
        <link rel="icon" href="/favicon.ico" />


        <Layout>
        {/* min-h-screen을 적용시키면 header에 밀려 완벽한 중앙정렬이 되지 않는다.
        그럼 header 크기만큼을 빼주면 되지 않을까? 라는 생각으로 footer 까지 스크린에 모두 들어올 수 있도록 
        100vh-(header높이+footer높이) 를 계산하여 min-h-[calc(100vh-180px)]를 적용시켰다.
        이 부분은 더 좋은 방법이 있을것으로 생각된다. */}
        <section className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero/>
          </div>
        </section>
    
        
        </Layout>
        </>  

 

  )
}
