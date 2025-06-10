import React from 'react';
import { Code, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript/TypeScript", "Python", "Java", "Javascript" ]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Google Cloud", "Microsoft Azure", "Docker"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench size={24} />,
      skills: ["React", "Node.js", "Github", "Git", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 hover:scale-105 transform cursor-default">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6 transition-all duration-300 hover:w-24"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Technical skills and expertise areas backed by professional certifications and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-white dark:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:scale-105 transform">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105 transform cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl transform hover:scale-105">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Certification Roadmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              My learning journey continues with upcoming certifications and areas of focus for professional growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">In Progress</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Advanced AI\ML Developer</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">Planned</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Machine Learning Exepert</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:scale-105 transform">Future</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Generative AI and AI Generation exepert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;