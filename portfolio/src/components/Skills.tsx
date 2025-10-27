import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'C', 'JavaScript (ES6)', 'TypeScript', 'SQL', 'HTML', 'CSS']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS', 'Bootstrap', 'Selenium', 'Socket.IO', 'Framer Motion']
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS EC2', 'AWS S3', 'Docker', 'Firebase', 'Git', 'GitHub']
    },
    {
      category: 'Developer Tools',
      items: ['VS Code', 'Eclipse', 'Postman', 'Android Studio', 'SSIS']
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
