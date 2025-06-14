import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId?: string;
  verificationUrl?: string;
}

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Sample certificates - you'll replace these with your actual certificates
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Geeks4Geeks Certified AI/ML Devloper",
      issuer: "Artificial Intelligence and Machine learning",
      date: "2025",
      description: "AI/ML Certified (GeeksforGeeks): Mastering intelligent systems for data-driven innovation.",
      image: "1.jpg",
      credentialId: "Geeks4Geeks",
      verificationUrl: "https://media.geeksforgeeks.org/certificates/1745579346/922840243643b92c6097ca3eb77cc2da.pdf"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2025",
      description: "Validates skills in designing, building, and deploying applications on Google Cloud Platform.",
      image: "7.jpeg",
      credentialId: "8151180",
      verificationUrl: "#"
    },
    {
      id: 3,
      title: "Elements Of AI",
      issuer: "MinnaLearn UNIVERSITY OF HELSINKI Finland",
      date: "2023",
      description: "Demonstrates expertise in Ai Fundamentsls .",
      image: "2.png",
      credentialId: "10xtkec5cL+t",
      verificationUrl: "https://certificates.mooc.fi/validate/1oxtkec5c4t"
    },
    {
      id: 4,
      title: "Hugging Face project",
      issuer: "Simplilearn",
      date: "2025",
      description: "Contributed on Hugging Face project during Initial Development",
      image: "3.jpeg",
      credentialId: "8315648",
      verificationUrl: "#"
    },
    {
      id: 5,
      title: "Geeks4Geeks DSA Bootcamp",
      issuer: "Geeks4Geeks",
      date: "2025",
      description: "Demonstrates proficiency in Data Struture problems>",
      image: "4.jpg",
      credentialId: "beb04069df16f39e7b466562172da2bb",
      verificationUrl: "https://media.geeksforgeeks.org/courses/certificates/beb04069df16f39e7b466562172da2bb.pdf"
    },
    {
      id: 6,
      title: "Figma Bootcamp",
      issuer: "Let's Upgrade",
      date: "2025",
      description: "Validates skills in containerization,Figma UI/UX, and best practices",
      image: "5.jpg",
      credentialId: "LUEFGMAR1251486",
      verificationUrl: "https://verify.letsupgrade.in/certificate/LUEFGMAR1251486"
    },
    {
      id: 7,
      title: "Generative AI ",
      issuer: "Infosys",
      date: "2025",
      description: "Validates knowledge of generative AI and its uses.",
      image: "6.jpg",
      credentialId: "``",
      verificationUrl: "https://verify.onwingspan.com/"
    },
    {
      id: 8,
      title: "Machine Learning With Python",
      issuer: "FreeCodecamp",
      date: "2025",
      description: "Demonstrates understanding of infrastructure as code concepts and Terraform fundamentals With Python In Machine Learning.",
      image: "8.jpg",
      credentialId: "fcc99084536-fea4-4422-a1d8-3ac1bbe9590a",
      verificationUrl: "https://www.freecodecamp.org/certification/fcc99084536-fea4-4422-a1d8-3ac1bbe9590a/machine-learning-with-python-v7"
    },
    {
      id: 9,
      title: "React Developer Certification",
      issuer: "Infosys",
      date: "2025",
      description: "Validates expertise in React development, including hooks, state management, and modern patterns.",
      image: "11.jpeg",
      credentialId: "``",
      verificationUrl: "https://verify.onwingspan.com/"
    },
    {
      id: 10, "Frontend Development",
      issuer: "Let's Upgrade",
      date: "2023",
      description: "Demonstrates proficiency in Frontend Development and their best practices.",
      image: "12.jpeg",
      credentialId: "CERT-2A3D0742",
      verificationUrl: "https://oneroadmap.io/skills/frontend/certificate/CERT-2A3D0742"
    },
    {
      id: 11,
      title: "Promt Engineering/ Vibe Coding",
      issuer: "Simplilearn",
      date: "2025",
      description: "Understanding of prompt engineering, Learned how Vibe coding works.",
      image: "9.jpeg",
      credentialId: "8310624",
      verificationUrl: "#"
    },
    {
      id: 12,
      title: "Python Bootcamp",
      issuer: "Let's Upgrade",
      date: "2025",
      description: "Demonstrates proficiency in Python programming fundamentals and object-oriented programming.",
      image: "10.jpg",
      credentialId: "LUEPYTMAR1253666",
      verificationUrl: "https://verify.letsupgrade.in/certificate/LUEPYTMAR1253666"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 hover:scale-105 transform cursor-default">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6 transition-all duration-300 hover:w-24"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive collection of professional certifications and achievements that demonstrate 
            expertise across various technologies and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group transform hover:scale-105 hover:-translate-y-2"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-gray-100 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">{cert.issuer}</p>
                  </div>
                  <Award className="text-gray-400 dark:text-gray-500 ml-2 flex-shrink-0 group-hover:text-black dark:group-hover:text-white transition-all duration-300 group-hover:scale-110" size={24} />
                </div>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                  <Calendar size={16} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
                  {cert.date}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 mb-4 transition-colors duration-300">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
                    {cert.credentialId}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto transform animate-slideUp transition-all duration-300">
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 transform"
                >
                  <X size={20} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {selectedCertificate.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{selectedCertificate.issuer}</p>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 transition-colors duration-300">
                  <Calendar size={18} className="mr-2" />
                  {selectedCertificate.date}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  {selectedCertificate.description}
                </p>
                
                <div className="border-t dark:border-gray-700 pt-6 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">Credential ID</p>
                      <p className="font-mono text-gray-900 dark:text-white transition-colors duration-300">{selectedCertificate.credentialId}</p>
                    </div>
                    {selectedCertificate.verificationUrl && (
                      <a
                        href={selectedCertificate.verificationUrl}
                        className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Verify</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
