import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <span className="text-white dark:text-black font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Portfolio</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Certificates & Achievements</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105">About</a>
            <a href="#certificates" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105">Certificates</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105">Skills</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <a href="https://github.com/AyushSingh360" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 transform">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ayushsingh360/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="ayushsingh21109@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 transform">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;