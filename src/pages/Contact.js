import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
import './Contact.css';
import { EMAILJS_CONFIG } from '../emailjs-config';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [errorDetails, setErrorDetails] = useState('');
  const contactRef = useRef(null);
  const formRef = useRef(null);

  // EmailJS Configuration is imported from emailjs-config.js

  useEffect(() => {
    // Fetch contact info from JSON server
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('http://localhost:3001/contact');
        const data = await response.json();
        setContactInfo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact info:', error);
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  useEffect(() => {
    if (!loading && contactRef.current) {
      // Animate contact section
      gsap.fromTo(contactRef.current.querySelectorAll('.contact-item'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate form
      gsap.fromTo(formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Save to localStorage
    const updatedFormData = { ...formData, [name]: value };
    localStorage.setItem('contactForm', JSON.stringify(updatedFormData));
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading state
    setSubmitted('sending');
    setErrorDetails('');

    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Amit Kumar Patel' // Your name
    };

    console.log('Sending email with config:', EMAILJS_CONFIG);
    console.log('Template params:', templateParams);

    // Send email using EmailJS
    emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.userId
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      
      // Save form data to localStorage
      localStorage.setItem('contactForm', JSON.stringify(formData));
      localStorage.setItem('contactSubmitted', 'true');

      // Show success message
      setSubmitted('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
        localStorage.removeItem('contactForm');
        localStorage.removeItem('contactSubmitted');
      }, 3000);
    })
    .catch((error) => {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        text: error.text,
        status: error.status,
        response: error.response
      });
      
      setErrorDetails(error.text || 'Unknown error occurred');
      setSubmitted('error');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setErrorDetails('');
      }, 5000);
    });
  };

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('contactForm');
    const wasSubmitted = localStorage.getItem('contactSubmitted');
    
    if (savedFormData && !wasSubmitted) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  if (loading) {
    return (
      <div className="contact-loading">
        <div className="loading-spinner"></div>
        <p>Loading contact information...</p>
      </div>
    );
  }

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Let's work together on your next project</p>
      </div>

      <div className="contact-content">
        <div ref={contactRef} className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>{contactInfo.email || 'amitpatel9302352967@gmail.com'}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>{contactInfo.phone || '+91 9753005051'}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>{contactInfo.location || 'Bhopal, Madhya Pradesh, India'}</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href={contactInfo.github || "https://github.com/AmitKumarPatel374"} target="_blank" rel="noopener noreferrer" className="social-link">
                <span>🐙</span>
                <span>GitHub</span>
              </a>
              <a href={contactInfo.linkedin || "https://www.linkedin.com/in/amit-kumar-patel-053130316/"} target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href={contactInfo.twitter || "https://x.com/Amit_Patel1213"} target="_blank" rel="noopener noreferrer" className="social-link">
                <span>🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div ref={formRef} className="contact-form">
          <h2>Send Message</h2>
                                {submitted === 'success' && (
                        <div className="success-message">
                          <span>✅</span>
                          <p>Message sent successfully! I'll get back to you soon.</p>
                        </div>
                      )}
                      {submitted === 'error' && (
                        <div className="error-message">
                          <span>❌</span>
                          <p>Failed to send message. Please try again.</p>
                          {errorDetails && (
                            <p className="error-details">Error: {errorDetails}</p>
                          )}
                        </div>
                      )}
                      {submitted === 'sending' && (
                        <div className="sending-message">
                          <span>⏳</span>
                          <p>Sending message...</p>
                        </div>
                      )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Project inquiry"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 