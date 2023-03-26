import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<ginozega8>/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className={styles.homediv}>
    <h1>Welcome to my blog!</h1>
    </div>
}
