'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, 
  SiMongodb, SiMysql, SiPostgresql, SiAmazonwebservices, SiDocker,
  SiGit, SiGithub, SiExpress, SiFlask, SiTailwindcss,
  SiBootstrap, SiSelenium, SiSocketdotio,
  SiPostman, SiAndroidstudio, SiFirebase, SiHtml5, SiCss3, SiC
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate skill categories
      const categories = gsap.utils.toArray('.skill-category');
      categories.forEach((category, index) => {
        gsap.from(category as Element, {
          scrollTrigger: {
            trigger: category as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });

        // Animate individual skill cards
        const cards = (category as Element).querySelectorAll('.skill-card');
        gsap.from(cards, {
          scrollTrigger: {
            trigger: category as Element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          rotation: 45,
          stagger: 0.05,
          duration: 0.6,
          ease: 'back.out(1.7)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Flask', icon: SiFlask, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
        { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
        { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
        { name: 'VS Code', icon: FaCode, color: '#007ACC' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-800" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Technical <span className="gradient-text">Skills</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
        A comprehensive toolkit for building modern, scalable applications
      </p>

      <div className="space-y-16">
        {skillsData.map((skillSet, index) => (
          <div key={index} className="skill-category">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {skillSet.category}
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
              {skillSet.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skillIndex}
                    className="skill-card flex flex-col items-center justify-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl cursor-pointer group w-full max-w-[140px] min-h-[140px] relative overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                    style={{ 
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                    
                    <div 
                      className="mb-3 relative z-10 transition-all duration-500 group-hover:scale-110"
                      style={{
                        transform: 'rotateY(0deg)',
                        transformStyle: 'preserve-3d'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'rotateY(360deg) scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'rotateY(0deg) scale(1)';
                      }}
                    >
                      <IconComponent 
                        className="text-6xl" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
