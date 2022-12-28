import Head from 'next/head'
import Image from 'next/image'
import Cake from '../components/Cake'
import HeroSection from '../components/HeroSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>Happy Birthday!</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/heart.svg" />
            </Head>
            <main>
                <HeroSection />
                <Cake />
            </main>
        </>
    )
}
