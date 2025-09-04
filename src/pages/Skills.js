import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';
// Import the skills data function
import { getSkillsData } from '../data/skillsData';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Fetch skills using the new function
    const fetchSkills = async () => {
      try {
        const data = await getSkillsData();
        setSkills(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading skills data:', error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    if (!loading && skillsRef.current) {
      // Animate skill cards
      gsap.fromTo(skillsRef.current.querySelectorAll('.skill-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // removed proficiency progress animations as requested
    }
  }, [loading, skills]);

  const SkillCard = ({ skill }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      if (cardRef.current) {
        // Hover animation
        const card = cardRef.current;
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        // Glow on hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { boxShadow: '0 20px 40px rgba(0,0,0,0.4)', duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', duration: 0.3 });
        });
      }
    }, []);

    return (
      <div ref={cardRef} className="skill-card">
        <div className="skill-header">
          <span className="skill-icon">{skill.icon}</span>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
        {/* removed percentage and proficiency bars as requested */}
        <span className="skill-category">{skill.category}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="skills-loading">
        <div className="loading-spinner"></div>
        <p>Loading skills...</p>
      </div>
    );
  }

  // Group skills by category
  const languageSkills = skills.filter(skill => skill.category === 'Language');
  const frontendSkills = skills.filter(skill => skill.category === 'Frontend');
  const toolSkills = skills.filter(skill => skill.category === 'Tool');

  // Helper to render a section
  const renderSection = (title, skillList) => (
    <section className="skills-section">
      <h2 className="skills-section-title">{title}</h2>
      <div className="skills-grid">
        {skillList.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="skills">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>Technologies, languages, and tools I work with</p>
      </div>
      <div ref={skillsRef} className="skills-content">
        {renderSection('Languages', languageSkills)}
        {renderSection('Frontend', frontendSkills)}
        {renderSection('Tools', toolSkills)}
      </div>
    </div>
  );
};

export default Skills; 