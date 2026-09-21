import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Code, 
  Languages, 
  FolderGit2, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, LANGUAGES_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-6 transition-all ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100 shadow-indigo-950/50'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className={`p-4 border-b flex items-center justify-between ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold font-display text-indigo-500">
              Curriculum Vitae Preview • A. Jancy Priya
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className={`p-1.5 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume Paper */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans print:p-0 print:max-h-none print:overflow-visible">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 dark:border-indigo-500/50 pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  Master of Computer Applications (MCA Scholar) | Aspiring Software Engineer
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Dr. G.R. Damodaran College of Science • Graduated BCA (87% Distinction)
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{PERSONAL_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>Contact: {PERSONAL_INFO.phoneRaw}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>Email: {PERSONAL_INFO.email}</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  DOB: {PERSONAL_INFO.dob}
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Resume Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column: Skills & Languages */}
            <div className="md:col-span-5 space-y-6">
              {/* Technical Skills */}
              <div className="border-b pb-6 dark:border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  Technical Skills
                </h2>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span><strong>Programming:</strong> Java, Python, C/C++ Basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span><strong>Mobile:</strong> Mobile Application Programming (Android), Sensor APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span><strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, React, Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span><strong>Data & Tools:</strong> Advanced Microsoft Excel, SQL, Git & GitHub, VS Code</span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="border-b pb-6 dark:border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5" />
                  Languages
                </h2>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {LANGUAGES_DATA.map((l, i) => (
                    <div key={i} className="p-2 rounded bg-slate-100 dark:bg-slate-800">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">{l.language}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">{l.fluency.split('/')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Profile */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Key Strengths
                </h2>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <li>• High Academic Distinction (87% BCA score)</li>
                  <li>• Practical IoT & Machine Learning experience</li>
                  <li>• Strong verbal & written communication</li>
                  <li>• Rapid learning curve in modern toolsets</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Education & Featured Projects */}
            <div className="md:col-span-7 space-y-6">
              {/* Education Section */}
              <div className="border-b pb-6 dark:border-slate-800">
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education
                </h2>

                <div className="space-y-4">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.id} className="text-xs">
                      <div className="flex items-center justify-between">
                        <strong className="text-slate-900 dark:text-white font-semibold">
                          {edu.degree}
                        </strong>
                        <span className="font-mono text-indigo-500 font-bold">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {edu.institution} • {edu.passingYear}
                      </p>
                      {edu.gradeDetail && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-500">
                          {edu.gradeDetail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  Key Engineering Projects
                </h2>

                <div className="space-y-4">
                  {PROJECTS_DATA.slice(0, 3).map((proj) => (
                    <div key={proj.id} className="text-xs">
                      <div className="flex items-center justify-between mb-0.5">
                        <strong className="text-slate-900 dark:text-white font-semibold">
                          {proj.title}
                        </strong>
                        <span className="text-[10px] text-indigo-500 uppercase font-mono">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1.5">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
