import '<ginozega8>/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import LoadingScreen from '../Components/LoadingScreen';
import { motion } from 'framer-motion';
import About from './About';

export default function App({ Component, pageProps }: AppProps) {
  // Loading Screen Functionality
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  // Cursor Flashlight Effect
  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 300,
      y: mousePosition.y - 300
    }
  }

  return <>
  {/* Conditionally rendering the loading screen */}
  {isLoading ? (
    <LoadingScreen />
  ) : (
    <>
    <motion.div className='cursor' 
    variants={variants}
    animate="default"
    transition={{ ease: "easeOut", duration: 0 }}
    />
    <Component {...pageProps} />
    </>
  )}
</>
  }
