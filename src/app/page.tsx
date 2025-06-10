'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                Portfolio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/#projects" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link href="/#experience" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Experience
                </Link>
                <Link href="/#education" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Education
                </Link>
                <Link href="/#contact" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Siam Hossain - Software Engineer
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building innovative solutions for tomorrow's challenges
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/siamhossain1234"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/siam-hossain-884879216/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
} 