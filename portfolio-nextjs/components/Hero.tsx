'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated background blobs
      gsap.to('.blob-1', {
        x: -50,
        y: 50,
        scale: 1.2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.blob-2', {
        x: -100,
        y: -50,
        scale: 1.3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Title words animation - Split text
      const title = document.querySelector('.hero-title');
      if (title) {
        const text = title.textContent || '';
        title.innerHTML = text.split(' ').map(word => 
          `<span class="word inline-block" style="opacity:0">${word}&nbsp;</span>`
        ).join('');

        gsap.to('.word', {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
      }

      // Subtitle animation
      gsap.from('.hero-subtitle', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      });

      // Location animation
      gsap.from('.hero-location', {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 1.3,
        ease: 'elastic.out(1, 0.5)',
      });

      // Description animation
      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.6,
        ease: 'power2.out',
      });

      // Buttons animation
      gsap.from('.hero-buttons > *', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        delay: 2,
        ease: 'back.out(1.4)',
      });

      // Social icons animation
      gsap.from('.hero-socials > *', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        stagger: 0.15,
        duration: 0.6,
        delay: 2.5,
        ease: 'back.out(2)',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" ref={heroRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="blob-1 absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10" />
        <div className="blob-2 absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10" />
      </div>

      <div className="section-container text-center relative z-10">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6" style={{ perspective: '1000px' }}>
          Hi, I'm <span className="gradient-text">Davis Sebastian</span>
        </h1>
        
        <h2 className="hero-subtitle text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Full Stack Software Engineer
        </h2>
        
        <div className="hero-location flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
          <FaMapMarkerAlt className="text-red-500" />
          <span>Bangalore, India</span>
        </div>

        <p className="hero-description text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate Software Developer with advanced expertise in <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span>, 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Python</span>, and 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Java</span>. 
          Building impactful, scalable applications leveraging cloud technologies.
        </p>

        <div className="hero-buttons flex flex-wrap gap-6 justify-center">
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>

        <div className="hero-socials flex gap-8 justify-center mt-12">
          <a href="https://github.com/davis109" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaGithub />
          </a>
          <a href="mailto:sebastiandavis109@gmail.com" className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaEnvelope />
          </a>
          <a href="tel:+919739570216" className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
