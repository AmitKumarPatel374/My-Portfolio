import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Header entrance animation
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Nav items stagger animation
    gsap.fromTo(navRef.current.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    // Animate header on route change
    gsap.to(headerRef.current, {
      y: -10,
      duration: 0.2,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    gsap.to('.mobile-menu', {
      height: isMenuOpen ? 0 : 'auto',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Portfolio</span>
        </Link>

        <nav ref={navRef} className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header; 