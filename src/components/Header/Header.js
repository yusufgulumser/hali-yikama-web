import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Gülümser" className={styles.logoImage} />
            <span className={styles.logoText}>Gülümser</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            <li>
              <Link 
                to="/services" 
                className={isActive('/services') ? styles.active : ''}
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link 
                to="/prices" 
                className={isActive('/prices') ? styles.active : ''}
              >
                Fiyatlarımız
              </Link>
            </li>
            <li>
              <Link 
                to="/tips" 
                className={isActive('/tips') ? styles.active : ''}
              >
                Puf Noktalar
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? styles.active : ''}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? styles.active : ''}
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile Navigation */}
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            <ul className={styles.mobileNavLinks}>
              <li>
                <Link 
                  to="/services" 
                  className={isActive('/services') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="/prices" 
                  className={isActive('/prices') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Fiyatlarımız
                </Link>
              </li>
              <li>
                <Link 
                  to="/tips" 
                  className={isActive('/tips') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Puf Noktalar
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? styles.active : ''}
                  onClick={closeMobileMenu}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div 
              className={styles.overlay} 
              onClick={closeMobileMenu}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 