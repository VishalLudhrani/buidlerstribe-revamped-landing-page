import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer, Hero, Highlights, Navbar } from '../components/elements';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buidlers Tribe</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Highlights />
        <Footer />
      </main>
    </>
  )
}

export default Home
