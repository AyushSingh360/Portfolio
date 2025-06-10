import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-black text-white transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transform cursor-default transition-transform duration-300">Get In Touch</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 transition-all duration-300 hover:w-24"></div>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Let's connect and discuss opportunities, collaborations, or simply share insights about technology and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 hover:scale-105 transform cursor-default transition-transform duration-300">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:scale-105 transform transition-all duration-200">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:rotate-12">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-400 transition-colors duration-300">Email</p>
                  <p className="text-white font-medium group-hover:text-gray-200 transition-colors duration-200">ayushsingh21109@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transform transition-all duration-200">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:rotate-12">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-400 transition-colors duration-300">Phone</p>
                  <p className="text-white font-medium group-hover:text-gray-200 transition-colors duration-200">+917367846703</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transform transition-all duration-200">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:rotate-12">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-400 transition-colors duration-300">Location</p>
                  <p className="text-white font-medium group-hover:text-gray-200 transition-colors duration-200">Bihar India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6 hover:scale-105 transform cursor-default transition-transform duration-300">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/AyushSingh360" className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ayushsingh360/" className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 dark:bg-opacity-10 rounded-2xl p-8 transition-all duration-300 hover:bg-opacity-10 dark:hover:bg-opacity-15 hover:shadow-2xl transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-6 hover:scale-105 transform cursor-default transition-transform duration-300">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:bg-opacity-15 focus:scale-105 transform"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:bg-opacity-15 focus:scale-105 transform"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 hover:bg-opacity-15 focus:scale-105 transform"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;