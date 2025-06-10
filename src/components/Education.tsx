'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string[];
  achievements: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor of Arts in Computer Science",
    school: "City University of New York, Hunter College",
    period: "2021 - 2025",
    description: [
      "Relevant Coursework: Web Development, Data Structures & Algorithms, Operating Systems, Computer Architecture I & II, Database Management, Software Analysis and Design I, II, & III "
    ],
    achievements: [
      "Dean's List",
      "Computer Science Club",
      "Muslim Student Association"
    ]
  },
  
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Education
          </h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <FaGraduationCap className="mr-2" />
                      {edu.school}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="mr-2" />
                    {edu.period}
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 