'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const expCards = gsap.utils.toArray('.experience-card');
      expCards.forEach((card, index) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          x: index % 2 === 0 ? -100 : 100,
          rotationY: index % 2 === 0 ? -15 : 15,
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      company: 'Commonwealth Bank of Australia',
      location: 'Bengaluru',
      role: 'Software Engineer Apprentice',
      period: 'Jul 2025 – Present',
      logo: '/images/commonwealth-bank.png',
      highlights: [
        '355-hour advanced apprenticeship in software engineering',
        'Developed full-stack MERN applications & AWS cloud deployment',
        'Built data engineering solutions using Python, PySpark'
      ]
    },
    {
      company: 'Calyirex Technologies Pvt. Ltd.',
      location: 'Bengaluru',
      role: 'Full Stack Developer Intern',
      period: 'Apr 2025 – Jun 2025',
      logo: '/images/calyirex.svg',
      highlights: [
        'Developed responsive websites for startup clients with MERN stack',
        'Built reusable templates for client onboarding',
        'Focused on high performance and intuitive UI/UX'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Work <span className="gradient-text">Experience</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
        Professional journey and contributions
      </p>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card card p-8 hover:shadow-2xl transition-all duration-300"
            style={{ perspective: '1000px' }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Company Logo */}
              <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-700 rounded-xl p-3 shadow-md flex items-center justify-center">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Experience Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.role}
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {exp.company}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="flex-shrink-0 text-red-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
