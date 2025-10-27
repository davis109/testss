'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate education cards
      const eduCards = gsap.utils.toArray('.education-card');
      gsap.from(eduCards, {
        scrollTrigger: {
          trigger: '.education-section',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 80,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.4)',
      });

      // Animate achievement cards
      const achievementCards = gsap.utils.toArray('.achievement-card');
      gsap.from(achievementCards, {
        scrollTrigger: {
          trigger: '.achievements-section',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.4)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: 'B.E. Computer Science',
      institution: 'Atria Institute of Technology',
      location: 'Bangalore',
      period: '2022 – 2026',
      grade: 'CGPA: 8.96'
    },
    {
      degree: 'Senior Secondary (XII)',
      institution: 'Kendriya Vidyalaya AFS Yelahanka',
      location: 'Bengaluru',
      period: '2021 – 2022',
      grade: '83.8%'
    },
    {
      degree: 'Secondary School (X)',
      institution: 'Kendriya Vidyalaya AFS Yelahanka',
      location: 'Bengaluru',
      period: '2019 – 2020',
      grade: '85.6%'
    }
  ];

  const achievements = [
    'Automated VTU Results Extractor for 1200+ student results',
    '1st Prize, Inter-School Science Exhibition: Real-Time PPE Compliance Monitor',
    'Vice-Captain, University Football Team – led multiple state/inter-collegiate wins'
  ];

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Education & <span className="gradient-text">Achievements</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
        Academic excellence and notable accomplishments
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <div className="education-section mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="flex items-center justify-center gap-3">
              <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
              <span className="gradient-text">Education</span>
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="education-card card h-full hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <FaCalendar className="flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-lg">
                      <FaStar />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="flex items-center justify-center gap-3">
              <FaStar className="text-yellow-500" />
              <span className="gradient-text">Achievements</span>
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card card h-full hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
