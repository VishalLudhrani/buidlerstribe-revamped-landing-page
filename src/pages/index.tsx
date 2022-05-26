import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero, Navbar } from '../components/elements';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buidlers Tribe</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default Home
