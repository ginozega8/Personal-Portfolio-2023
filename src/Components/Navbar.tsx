import Link from 'next/link';
import styles from '<ginozega8>/styles/Navbar.module.scss'
const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          Logo
        </li>
        <li>
          Contact
        </li>
        <li>
          Menu
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;