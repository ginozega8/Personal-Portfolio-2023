import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<ginozega8>/styles/Home.module.scss'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react';
import LoadingScreen from '../Components/LoadingScreen';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // State for Loading Screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return <div>
    {/* Conditionally rendering the loading screen */}
    {isLoading ? (
      <LoadingScreen />
    ) : (
      <>
        < Navbar />
        <div className={styles.homediv}>
          <div className='flex flex-row place-content-evenly pt-[180px] max-lg:pt-[20px] max-lg:flex-col-reverse max-lg:items-center relative mb-52'>
            <div className='max-lg:flex-col max-lg:text-center'>
              <h1>GINO ZEGA <br /> FRONTEND DEVELOPER</h1>
              <hr className='max-md:w-[280px]'></hr>
            </div>
            <div className='relative'>
              <Image
                src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1680106020/Portfolio%202023/material_mtvlih.png"
                alt="Cube"
                width={350}
                height={350}
                priority
                className='max-lg:w-[250px] cube-material'
              />
              <div className="main">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className={styles.features}>
            </div>
            <div className="text-center basis-3/4">
              <h2 className='text-3xl text-accent-yellow'>Responsive, User-Friendly, and Scalable</h2>
              <p className="text-slate-600 text-text-blue">Those are my priorities as a developer, I always try to develop a product that is suitable for both customers and developers, taking into account the variety of devices, and people.</p>
            </div>
          </div>
        </div>
      </>
    )}

  </div>
}
