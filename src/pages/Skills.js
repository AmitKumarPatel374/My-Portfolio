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
  const progressBarsRef = useRef(null);

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

      // Animate progress bars
      if (progressBarsRef.current) {
        const progressBars = progressBarsRef.current.querySelectorAll('.progress-bar-fill');
        progressBars.forEach((bar, index) => {
          const skill = skills[index];
          if (skill) {
            gsap.fromTo(bar,
              { width: 0 },
              {
                width: `${skill.level}%`,
                duration: 1.5,
                ease: 'power2.out',
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: progressBarsRef.current,
                  start: 'top 80%',
                  end: 'bottom 20%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          }
        });
      }
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
            scale: 1.05,
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
      }
    }, []);

    return (
      <div ref={cardRef} className="skill-card">
        <div className="skill-header">
          <span className="skill-icon">{skill.icon}</span>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
        <div className="skill-progress">
          <div className="progress-bar">
            <div 
              className="progress-bar-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="skill-level">{skill.level}%</span>
        </div>
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
  const otherSkills = skills.filter(skill => skill.category === 'Other');

  // Helper to render a section
  const renderSection = (title, skillList) => (
    <section className="skills-section">
      <h2 className="skills-section-title">{title}</h2>
      <div className="skills-grid">
        {skillList.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      <div className="skills-progress">
        <h3>Proficiency</h3>
        <div className="progress-container">
          {skillList.map(skill => (
            <div key={skill.id} className="progress-item">
              <div className="progress-label">
                <span className="progress-icon">{skill.icon}</span>
                <span className="progress-name">{skill.name}</span>
                <span className="progress-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
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
        {renderSection('Other', otherSkills)}
      </div>
    </div>
  );
};

export default Skills; 