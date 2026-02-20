import React from 'react';
import Navbar from './components/layout/Navbar';
import Toast from './components/ui/Toast';
import { useToast } from './hooks/useToast';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Toast toasts={toasts} onRemove={removeToast} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Deni One · Jakarta, Indonesia</p>
          <p className="text-slate-600 text-xs mt-1">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
