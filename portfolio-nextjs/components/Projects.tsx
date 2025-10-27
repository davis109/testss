'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const projectCards = gsap.utils.toArray('.project-card');
      projectCards.forEach((card, index) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 100,
          rotationY: 20,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Virtual Try-On for Ecommerce',
      description: 'AI-powered solution using Python, OpenCV, and TensorFlow with secure file handling and live pipeline integration for real-time shopping experiences.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'Computer Vision'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Learning Management System (LMS)',
      description: 'Full-stack MERN LMS with JWT authentication, Cloudinary image APIs, PayPal payment integration, and robust RESTful API for course/payment/user management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'PayPal API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'VTU Results Extractor',
      description: 'Automated result retrieval system for 1200+ students using Python, Selenium, and Flask with dynamic USN/batch handling and advanced error management.',
      tech: ['Python', 'Selenium', 'Flask', 'Web Scraping', 'Automation'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-800" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
        Innovative solutions that showcase my technical expertise
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card card p-6 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group"
            style={{ perspective: '1000px' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={project.github}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <FaGithub className="text-xl" />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
