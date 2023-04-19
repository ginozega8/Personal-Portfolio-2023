import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.Navbar}>
      <ul className='flex space-x-6 max-[430px]:space-x-0'>
        <li className="flex-auto w-10 ...">
          <Image
            src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1681483093/Portfolio%202023/Gino_Dev_hkbn7y.png"
            alt="Gino_Dev"
            width={180}
            height={60}
            unoptimized
          />
        </li>
        <li>
          <button className={styles.contactMeBtt}>CONTACT ME</button>
        </li>
        <li>
        {isOpen && (
          <div className={`${styles.menu}`}>
            <button onClick={closeMenu}>
              X
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
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
           )}
          <button onClick={toggleMenu}>
            <Image
              src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1680030544/Portfolio%202023/Hammenu_gneab8.png"
              alt="Menu"
              width={50}
              height={50}
              unoptimized
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;