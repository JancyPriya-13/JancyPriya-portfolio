import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Send, Sparkles, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25 transition-transform group-hover:scale-105">
              JP
            </div>
            <div>
              <span className={`text-lg font-bold tracking-tight font-display transition-colors ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-indigo-500 font-medium">
                <GraduationCap className="w-3.5 h-3.5" />
                MCA Scholar • Kannur
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-slate-800/80 shadow-sm'
                        : 'text-indigo-600 bg-indigo-50/80 shadow-sm'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action buttons (Resume, Theme Toggle, CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Resume button */}
            <button
              id="nav-resume-button"
              type="button"
              onClick={onOpenResume}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              View Resume
            </button>

            {/* Dark / Light Toggle */}
            <button
              id="nav-theme-toggle"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle color theme"
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-300 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action */}
            <a
              id="nav-cta-contact"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-3.5 h-3.5" />
              Get In Touch
            </a>

            {/* Mobile menu trigger */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation menu"
              className={`md:hidden p-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-300'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden px-4 pt-2 pb-6 border-b transition-all ${
            darkMode
              ? 'bg-slate-950/98 border-slate-800 text-slate-200'
              : 'bg-white/98 border-slate-200 text-slate-800 shadow-xl'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-slate-800 text-indigo-400 font-semibold'
                      : 'bg-indigo-50 text-indigo-600 font-semibold'
                    : darkMode
                    ? 'hover:bg-slate-900 text-slate-300'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-700/50 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold border border-indigo-500/30 bg-indigo-500/10 text-indigo-500"
              >
                <FileText className="w-4 h-4" />
                View & Print Resume
              </button>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
              >
                <Send className="w-4 h-4" />
                Contact Me Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
