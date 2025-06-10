import React from 'react';
import { User, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 hover:scale-105 transform cursor-default">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto transition-all duration-300 hover:w-24"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image and name */}
          <div className="group">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 transform">
              <div className="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 overflow-hidden">
                <img
                  src="/13.png" // 
                  alt="Ayush Kumar"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic transition-colors duration-300">
                Ayush Kumar
              </p>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 hover:scale-105 transform cursor-default">
                Professional Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                Passionate about technology and continuous learning, I've
                dedicated my career to mastering various aspects of software
                development and emerging technologies. Each certificate and
                achievement represents a milestone in my professional growth.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                My commitment to excellence drives me to stay current with
                industry trends and best practices, ensuring that my skills
                remain relevant and valuable in an ever-evolving tech
                landscape.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:scale-105 transform transition-all duration-200">
                <Calendar
                  className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                  Experience: Fresher, 1 Month Frontend Developer
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:scale-105 transform transition-all duration-200">
                <MapPin
                  className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                  Location: Bihar, India
                </span>
              </div>
            </div>

            <div className="pt-6">
              <a href="/resume.pdf" download>
                <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
