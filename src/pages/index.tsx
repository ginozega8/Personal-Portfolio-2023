import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<ginozega8>/styles/Home.module.scss'
import Navbar from '../Components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className={styles.homediv}>
    <Navbar />
    <h1>GINO ZEGA <br/> FRONTEND DEVELOPER</h1>
    </div>
}
