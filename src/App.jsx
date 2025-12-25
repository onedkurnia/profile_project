import React from 'react';
import Navbar from './components/layout/Navbar';
import Toast from './components/ui/Toast';
import { useToast } from './hooks/useToast';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Toast toasts={toasts} onRemove={removeToast} />
      
      {/* Hero Section Placeholder */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-6xl font-heading font-bold gradient-text mb-4">
            Deni One
          </h1>
          <p className="text-2xl text-slate-600 mb-2">Software Developer</p>
          <p className="text-lg text-slate-500">
            3+ years building scalable mobile & backend solutions at Samsung
          </p>
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center">
            Software Developer with 3+ years of professional experience at Samsung R&D Indonesia, 
            specializing in backend architecture, Android engineering, and end-to-end product delivery.
          </p>
        </div>
      </section>

      {/* Skills Section Placeholder */}
      <section id="skills" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Kotlin', 'Java', 'TypeScript', 'Android', 'Spring Boot', 'React', 'Docker', 'AWS'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-md text-center">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {['Salaam', 'SLime', 'Speed Measurement System', 'Smart Card Reader'].map((project) => (
              <div key={project} className="bg-slate-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">{project}</h3>
                <p className="text-slate-600">Project description coming soon...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section Placeholder */}
      <section id="publications" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Publications
          </h2>
          <p className="text-center text-slate-600">Research publications coming soon...</p>
        </div>
      </section>

      {/* Experience Section Placeholder */}
      <section id="experience" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Experience
          </h2>
          <p className="text-center text-slate-600">Work experience timeline coming soon...</p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Contact Me
          </h2>
          <div className="text-center">
            <p className="text-lg text-slate-600 mb-4">onedkurnia@gmail.com</p>
            <p className="text-lg text-slate-600">+62 858-7181-8829</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Deni One. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
