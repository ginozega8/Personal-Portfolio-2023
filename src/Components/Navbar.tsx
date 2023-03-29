import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className='flex space-x-6 max-[430px]:space-x-0'>
        <li className="flex-auto w-10 ...">
          <Image
            src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1680030330/Portfolio%202023/My_Logo_2_ncqcf2.png"
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
        <Image
            src="https://res.cloudinary.com/dgiqi5urn/image/upload/v1680030544/Portfolio%202023/Hammenu_gneab8.png"
            alt="Menu"
            width={50}
            height={50}
            unoptimized
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;