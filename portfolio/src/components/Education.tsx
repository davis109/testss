import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendar, FaStar } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Education & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Academic excellence and notable accomplishments
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <FaGraduationCap />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <FaCalendar />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <FaStar />
                    <span>{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400 flex items-center gap-2">
              <FaStar />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-yellow-500 text-xl">🏆</div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      {achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
