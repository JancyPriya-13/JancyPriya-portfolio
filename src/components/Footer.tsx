import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-md">
                JP
              </div>
              <span className={`text-lg font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm max-w-md leading-relaxed">
              Master of Computer Applications (MCA) scholar at Dr. G.R. Damodaran College of Science. Dedicated to engineering robust software, mobile applications, and intelligent systems.
            </p>

            <div className="flex items-center gap-2 text-xs text-indigo-500 font-medium">
              <GraduationCap className="w-4 h-4" />
              <span>MCA Post-Graduate Scholar • Kannur, Kerala</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-indigo-500 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-500 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-500 transition-colors">Engineering Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-500 transition-colors">Academic Record (87%)</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="hover:text-indigo-500 transition-colors text-left"
                >
                  View Full Resume (CV)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-2">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-500 transition-colors truncate">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:text-indigo-500 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>Kannur, Kerala - 670011</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <span>© {currentYear} A. Jancy Priya. Built with React & Tailwind CSS.</span>
          </div>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
              darkMode
                ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
