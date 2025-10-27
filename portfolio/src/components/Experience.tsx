import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Commonwealth Bank of Australia',
      location: 'Bengaluru',
      role: 'Software Engineer Apprentice',
      period: 'Jul 2025 – Present',
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
      highlights: [
        'Developed responsive websites for startup clients with MERN stack',
        'Built reusable templates for client onboarding',
        'Focused on high performance and intuitive UI/UX'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Building impactful solutions at leading organizations
        </p>

        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
