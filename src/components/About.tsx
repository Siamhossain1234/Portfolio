'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL',
    'React.js', 'Node.js', 'Express', 'Spring Boot', 'TensorFlow',
    'AWS', 'PostgreSQL', 'MongoDB', 'MySQL', 'Vercel', 'Oracle', 'Docker', 'Kubernetes', 'Agile', 'Git'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate Software Engineer with expertise in building scalable web applications
              and cloud-native solutions. With a strong foundation in both frontend and backend
              development, I strive to create efficient, maintainable, and user-friendly applications
              that solve real-world problems.
            </p>
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 