import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-800" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Innovative solutions that showcase my technical expertise
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group relative"
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none" />
              
              <div className="mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4 relative z-10">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-sm font-medium">Code</span>
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
