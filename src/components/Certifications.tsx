import React from 'react';
import { Award, CheckCircle2, ShieldCheck, FileBadge, Calendar } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  return (
    <section
      id="certifications"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <FileBadge className="w-3.5 h-3.5" />
            <span>Credentials & Upskilling</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & Training
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Verified technical coursework and foundational certificates completed alongside college degree curricula.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-indigo-950/20'
                  : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-indigo-500">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold font-display mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                          darkMode
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
