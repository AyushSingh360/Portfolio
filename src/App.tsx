import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;