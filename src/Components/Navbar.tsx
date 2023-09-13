import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'
import { CgMenuGridR } from 'react-icons/cg';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.Navbar} ref={navbarRef}>
      <ul className='flex space-x-6 max-[430px]:space-x-0'>
        <li className="flex-auto w-10 ...">
          <Link href="/">
          <Image
            src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1690926205/Portfolio%202023/LOgo_1_xxoptz.png"
            alt="Gino Dev | Frontend Developer"
            width={166}
            height={61}
            priority
          />
          </Link>
        </li>
       
        <li>
          <div className={`${isOpen ? (styles.menu) : (styles.menuHidden)}`}>
            <button onClick={closeMenu} className={styles.closeMenuBtt}>
             x
            </button>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleMenu}>
            <CgMenuGridR className='text-text-1-gray text-left text-[50px] font-bold hover:text-text-soft-yellow duration-500 cursor-pointer' />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;