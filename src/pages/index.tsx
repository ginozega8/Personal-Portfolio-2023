import Home from './home'
import { useState, useEffect } from 'react';
import LoadingScreen from '../Components/LoadingScreen';
import { motion } from 'framer-motion';
export default function Index() {
  // State for Loading Screen
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  console.log(mousePosition);
  
  useEffect(() =>{
    const mouseMove = (e : any) =>{
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

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
const variants = {
  default: {
    x: mousePosition.x - 200,
    y: mousePosition.y - 200
  }
}

  return <div>
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
      <Home></Home>
      </>
    )}

  </div>
}
