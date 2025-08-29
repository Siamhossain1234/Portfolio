'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Cultured Kids Cuisine",
    period: "July 2025 - August 2025",
    description: [
      "Built and deployed 15+ reusable UI components in React.js, improving maintainability and reducing duplicate code by 30%",
      "Improved mobile responsiveness across 5+ breakpoints, ensuring seamless user experience on all devices.",
      "Collaborated closely with design and engineering teams to deliver production-ready web features."],
    technologies: ["Node.js", "React.js", "Express"]
  },
  {
    title: "Software Engineer Intern",
    company: "Theramotive",
    period: "June 2024 - August 2024",
    description: [
      "Reduced patient intake time by 75% by developing scalable cloud-hosted medical billing services with React.js and Node.js.",
      "Increased data entry efficiency by 40% by integrating NLP models for automated medical coding and implementing a fault-tolerant computer vision pipeline in Python.",
      "Improved deployment reliability and speed by delivering production-ready services through Vercel and Google Cloud Platform.",
      "Participated in multiple agile sprints within a 16-person engineering team, collaborating across two squads to design, implement, and test secure internal tools, improving internal workflow efficiency." ],
    technologies: ["Node.js", "React.js", "Express", "Google Cloud Platform", "Vercel"]
  },
  {
    title: "Quality Assurance Tester",
    company: "Applause",
    period: "January 2024- June 2024",
    description: [
      "Conducted system-level functional and regression testing for diverse software products.",
      "Developed Python unittest automation scripts to verify API endpoints and application behavior under real-world conditions.",
      "Reported bugs via structured tickets and collaborated with developers on optimizing performance in test and production builds."
    ],
    technologies: ["Python", "Functional Testing", "Regressional Testing", "Manual Testing", "Automation Testing"]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Work Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <FaBriefcase className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 