import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFileText, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '<ginozega8>/styles/Home.module.scss'
import Navbar from '../Components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
      
        < Navbar />
        <div className={styles.homediv}>
          <div className='w-[80vw] sm:w-[60vw] ml-5 sm:ml-[20vw] sm:pt-[20vh] pt-[5vh]'>
            <div className="glitch-wrapper">
              <div className="glitch" data-text="HELLO, I'M GINO ZEGA">HELLO, I'M GINO ZEGA</div>
              <p className='text-text-1-gray'><br />I'm the one who brings websites to life with <span className='font-bold text-text-soft-yellow'>frontend development</span>. I transform lines of code into responsive, maintainable, and user-centered digital experiences.</p>
              <div className='flex flex-col sm:flex-row'>
                <Link href={"./About"} className='text-text-1-gray text-left pt-5 text-[17px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'>Read more about me <span className='text-[20px] pl-2'>→</span></Link>
                <a className='text-text-1-gray text-left pt-5 sm:pl-10 pl-0 text-[17px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'>Contact Me <span className='text-[20px] pl-2'>→</span></a>
              </div>
              <div className='flex sm:flex-row'>
                <Link href={"https://www.linkedin.com/in/ginozega8/"} title='To my Linkedin!' target='blank' className='text-text-1-gray text-left pt-10 text-[24px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'><AiOutlineLinkedin /></Link>
                <Link href={"https://github.com/ginozega8"} target='blank' title="To my Github!" className='text-text-1-gray text-left pt-10 sm:pl-10 pl-5 text-[24px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'><AiOutlineGithub/></Link>
                <Link href={"google.com"} target='blank' title='My Resume!' className='text-text-1-gray text-left pt-10 sm:pl-10 pl-5 text-[24px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'><AiOutlineFileText/></Link>
                <Link href={"mailto:ginozega8@outlook.es"} target='blank' title='My Email!' className='text-text-1-gray text-left pt-10 sm:pl-10 pl-5 text-[24px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer'><AiOutlineMail/></Link>
              </div>
            </div>
          </div>
        </div>
  </div>
}