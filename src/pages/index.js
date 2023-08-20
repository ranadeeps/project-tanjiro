import { Inter } from 'next/font/google'
import Box from '../components/Box'
import Head from 'next/head'
import logo from '/public/favicon.ico'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <link rel='icon' type='image/x-icon' href={logo.src} ></link>
        <title>Project-Puzzle</title>
      </Head>
        <Box></Box>
    </main>
  )
}
