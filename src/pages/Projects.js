import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';
// Import the projects data function
import { getProjectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [projects, setProjects] = useState({ major: [], minor: [] });
  const [loading, setLoading] = useState(true);
  const projectsRef = useRef(null);
  const majorRef = useRef(null);
  const minorRef = useRef(null);

  useEffect(() => {
    // Fetch projects using the new function
    const fetchProjects = async () => {
      try {
        const data = await getProjectsData();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading projects data:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!loading && projectsRef.current) {
      // Animate project cards
      gsap.fromTo(projectsRef.current.querySelectorAll('.project-card'),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate section headers
      gsap.fromTo([majorRef.current, minorRef.current],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, [loading, projects]);

  const ProjectCard = ({ project }) => {
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
      <div ref={cardRef} className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on</p>
      </div>

      <div ref={projectsRef} className="projects-content">
        {/* Major Projects */}
        <section ref={majorRef} className="projects-section">
          <h2 className="section-title">Major Projects</h2>
          <div className="projects-grid">
            {projects.major?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Minor Projects */}
        <section ref={minorRef} className="projects-section">
          <h2 className="section-title">Minor Projects</h2>
          <div className="projects-grid">
            {projects.minor?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects; 