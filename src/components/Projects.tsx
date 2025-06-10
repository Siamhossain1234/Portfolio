'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  videoUrl: string;
}

const projects: Project[] = [
  {
    title: "RiskFlow – Intelligent Project Risk Management System",
    description: [
      "Built a full-stack web application for managing software development risks, with task ticketing, risk prioritization, and real-time collaboration",
      "Developed secure REST APIs and implemented role-based access control (RBAC) with Clerk for project managers and team members.",
      "Designed a risk scoring engine using impact-probability matrices to support prioritization workflows",
      "Deployed services in Docker containers and implemented CI/CD pipelines for automated testing and delivery"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Siamhossain1234/Web_dev_final_project",
    demoUrl: "https://drive.google.com/file/d/1C5JnQY6tIezxvKCDI1pQIzQsPI8R8tLd/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1C5JnQY6tIezxvKCDI1pQIzQsPI8R8tLd/view?usp=sharing"
  },
  {
    title: "BBallZone – Fantasy Basketball Analytics Platform",
    description: [
      "Engineered a backend data pipeline using Spring Boot and PostgreSQL to collect and serve NBA statistics.",
      "Integrated a Python-based machine learning model to forecast game scores based on historical data",
      "Deployed RESTful APIs to AWS EC2, enabling real-time analytics and prediction capabilities.",
    ],
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "TensorFlow"],
    githubUrl: "https://github.com/Siamhossain1234/NBA-Fantasy-Project.git",
    demoUrl: "https://drive.google.com/file/d/1tTvRc9vhG85mzoQHfUmwZsV0ov7EJkEC/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1tTvRc9vhG85mzoQHfUmwZsV0ov7EJkEC/view?usp=sharing"
  },
  {
    title: "Library Management System",
    description: [
      "Built an object-oriented database engine with support for file-based storage and indexing operations.",
    ],
    technologies: ["C++", "Object Oriented Programming"],
    githubUrl: "https://github.com/Siamhossain1234/LibrarySystem",
    demoUrl: "",
    videoUrl: "https://drive.google.com/file/d/1lIkG3NpZpIHYdPhW9fixJsgrUorU32Hl/view?usp=sharing"
  },
  {
    title: "RecipeRecs - IOS app",
    description: [
      "Developed a Swift-based iOS app that helps users discover recipes based on available ingredients",
      "Integrated a REST API to fetch dynamic recipe data in real time.",
      "Implemented a custom reactive UI for a smooth and responsive user experience.",
    ],
    technologies: ["Swift", "REST API"],
    githubUrl: "https://github.com/Siamhossain1234/RecipeRecs.git",
    demoUrl: "https://drive.google.com/file/d/1p08ki6DIi7Wtzk-D-rJBTZ9DTtASZ6Id/view?usp=sharing",
    videoUrl: "https://drive.google.com/file/d/1p08ki6DIi7Wtzk-D-rJBTZ9DTtASZ6Id/view?usp=sharing"
  },
  
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                  <iframe
                    src={project.videoUrl.replace('/view?usp=sharing', '/preview')}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="ml-4">{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
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