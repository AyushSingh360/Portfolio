import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-8 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 dark:text-gray-500 transition-colors duration-300 hover:text-gray-300 dark:hover:text-gray-400 cursor-default">
              © 2025 Portfolio, All rights reserved - Ayush Singh
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-500 group hover:scale-105 transform transition-all duration-300 cursor-default">
            <span className="group-hover:text-gray-300 dark:group-hover:text-gray-400 transition-colors duration-200">Made with</span>
            <Heart size={16} className="text-red-500 fill-current group-hover:scale-110 transition-transform duration-200" />
            <span className="group-hover:text-gray-300 dark:group-hover:text-gray-400 transition-colors duration-200">and dedication to excellence</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 dark:border-gray-700 text-center transition-colors duration-300">
          <p className="text-sm text-gray-500 dark:text-gray-600 transition-colors duration-300 hover:text-gray-400 dark:hover:text-gray-500 cursor-default">
            This portfolio showcases professional achievements and certifications. 
            All certificates are verifiable through their respective issuing organizations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;