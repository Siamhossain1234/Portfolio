'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/siamhossain1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/siam-hossain-884879216/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:siam.hossain.work@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaEnvelope className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 