import React from 'react';
import { Award, TrendingUp, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-black dark:bg-white rounded-full mx-auto mb-6 flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-12 shadow-lg hover:shadow-2xl">
              <Award size={64} className="text-white dark:text-black transition-colors duration-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 hover:scale-105 transform cursor-default">
              Ayush Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              Professional Developer & Certified Expert
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Showcasing a collection of professional certifications, achievements, and continuous learning journey 
              in technology and development. Each certificate represents dedication to excellence and expertise in various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Award size={32} className="text-white dark:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">Certified Professional</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Multiple industry-recognized certifications</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <TrendingUp size={32} className="text-white dark:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Always growing and expanding expertise</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Target size={32} className="text-white dark:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">Goal-Oriented</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Focused on achieving measurable results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;