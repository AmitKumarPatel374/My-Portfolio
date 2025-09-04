import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl
      .fromTo(heroRef.current.querySelector('.hero-title'), 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(heroRef.current.querySelector('.hero-subtitle'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(heroRef.current.querySelector('.hero-buttons'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

    // Content section animations
    gsap.fromTo(contentRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // About section animations
    gsap.fromTo(aboutRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animation for hero elements
    gsap.to(heroRef.current.querySelector('.hero-avatar'), {
      y: -20,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Parallax background subtle move
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        backgroundPosition: '60% 40%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5
        }
      });
    }

  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section ref={(el) => { heroRef.current = el; parallaxRef.current = el; }} className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Amit Kumar Patel</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Web Developer & Creative Problem Solver
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-avatar">
            <img 
              src="/profileImage.jpg" 
              alt="Amit Kumar Patel"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="content-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Responsive</h3>
              <p>Building lightning-fast applications with modern technologies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Creating stunning user interfaces with attention to detail</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Clean Code</h3>
              <p>Writing maintainable and scalable code solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies like HTML, CSS, JavaScript, and React. I enjoy building clean, responsive, and user-friendly web interfaces.
              </p>
              <p>
              When I'm not coding, you’ll find me exploring new tools and frameworks, improving my skills through personal projects, or learning from the developer community.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" 
                alt="Coding workspace"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 