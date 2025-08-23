import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Footer entrance animation
    gsap.fromTo(footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Animate social links
    gsap.fromTo(footerRef.current.querySelectorAll('.social-link'),
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'back.out(1.7)',
        delay: 0.3
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Amit Kumar Patel</h3>
          <p>Full Stack Developer</p>
          <p>Creating amazing digital experiences</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/AmitKumarPatel374" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐙</span>
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-patel-053130316/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>💼</span>
            </a>
            <a href="https://x.com/Amit_Patel1213" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐦</span>
            </a>
            <a href="mailto:amitpatel9302352967@gmail.com" className="social-link">
              <span>📧</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; 2025 Amit Kumar Patel. All rights reserved.</p>
        <p>Built with ❤️ using React & GSAP</p>
      </div>
    </footer>
  );
};

export default Footer; 