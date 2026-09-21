import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jancy_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('jancy_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
