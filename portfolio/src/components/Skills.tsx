import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, 
  SiMongodb, SiMysql, SiPostgresql, SiAmazonaws, SiDocker,
  SiGit, SiGithub, SiExpress, SiFlask, SiTailwindcss,
  SiBootstrap, SiSelenium, SiSocketdotio, SiVisualstudiocode,
  SiPostman, SiAndroidstudio, SiFirebase, SiHtml5, SiCss3,
  SiC, SiJava
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsData = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: SiJava, color: '#007396' },
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
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
        { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' }
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
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' }
      ]
    },
    {
      category: 'Developer Tools',
      skills: [
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-800" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((skillSet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">
                {skillSet.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillSet.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ 
                        scale: 1.15, 
                        rotateY: 15,
                        rotateX: 10,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl cursor-pointer group"
                      style={{ 
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <motion.div
                        className="mb-3"
                        whileHover={{ 
                          y: -8,
                          transition: { duration: 0.3 }
                        }}
                        style={{
                          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                        }}
                      >
                        <IconComponent 
                          className="text-5xl transition-all duration-300" 
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
