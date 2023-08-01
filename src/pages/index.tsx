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
          <div className='w-[80vw] sm:w-[60vw] ml-5 sm:ml-[20vw] pt-[20vh]'>
            <div className="glitch-wrapper">
              <div className="glitch" data-text="HELLO, I'M GINO ZEGA">HELLO, I'M GINO ZEGA</div>
              <p className='text-text-1-gray'><br />I'm the one who brings websites to life with <span className='font-bold text-text-soft-yellow'>frontend development</span>. I transform lines of code into responsive, maintainable, and user-centered digital experiences.</p>
              <div className='flex flex-col sm:flex-row'>
              <a className='text-text-1-gray text-left pt-10 text-[17px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'>Read more about me <span className='text-[20px] pl-2'>→</span></a>
              <a className='text-text-1-gray text-left pt-10 sm:pl-10 pl-0 text-[17px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'>Contact Me <span className='text-[20px] pl-2'>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </>
    )}

  </div>
}
