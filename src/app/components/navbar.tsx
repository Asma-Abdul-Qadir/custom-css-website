'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../components/navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TravelTales</div>
      <button className={styles.menuToggler} onClick={handleToggle}>
        &#9776; {/* Unicode hamburger icon */}
      </button>
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <li>
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/destinations" onClick={handleLinkClick}>
            Destinations
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
