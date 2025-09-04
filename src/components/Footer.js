import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Footer reveal on scroll
    gsap.fromTo(footerRef.current,
      { y: 40, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          once: true
        }
      }
    );

    // Animate social links
    gsap.fromTo(footerRef.current.querySelectorAll('.social-link'),
      { y: 10, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 92%',
          once: true
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Amit Kumar Patel</h3>
          <p>Full Stack Web Developer</p>
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
              <span><FaGithubSquare /></span>
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-patel-053130316/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span><FaLinkedin /></span>
            </a>
            <a href="https://x.com/Amit_Patel1213" target="_blank" rel="noopener noreferrer" className="social-link">
              <span><FaSquareXTwitter /></span>
            </a>
            <a href="mailto:amitpatel9302352967@gmail.com" className="social-link">
              <span><MdEmail /></span>
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