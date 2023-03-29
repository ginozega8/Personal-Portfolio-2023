import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<ginozega8>/styles/Home.module.scss'
import Navbar from '../Components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <Navbar />
    <div className={styles.homediv}>
      <div className='flex flex-row place-content-evenly pt-[180px] max-lg:pt-[20px] max-lg:flex-col-reverse max-lg:items-center'>
        <div className='max-lg:flex-col max-lg:text-center'>
        <h1>GINO ZEGA <br /> FRONTEND DEVELOPER</h1>
        <hr className='max-md:w-[280px]'></hr>
        </div>
        <div>
        <Image
          src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1680106020/Portfolio%202023/material_mtvlih.png"
          alt="Cube"
          width={350}
          height={350}
          unoptimized
          className='max-lg:w-[250px]'
        />
        </div>
      </div>
    </div>
  </div>
}
