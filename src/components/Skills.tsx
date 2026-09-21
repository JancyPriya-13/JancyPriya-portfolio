import React, { useState } from 'react';
import { 
  Wrench, 
  Code, 
  Smartphone, 
  Database, 
  FileSpreadsheet, 
  Layers, 
  Cpu, 
  CheckCircle,
  Terminal,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web & Mobile', 'Data & AI', 'Tools & Platforms'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4 text-indigo-500" />;
      case 'Web & Mobile':
        return <Smartphone className="w-4 h-4 text-cyan-500" />;
      case 'Data & AI':
        return <Database className="w-4 h-4 text-emerald-500" />;
      case 'Tools & Platforms':
        return <Wrench className="w-4 h-4 text-amber-500" />;
      default:
        return <Layers className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Competencies
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A balanced repertoire of core programming languages, mobile development frameworks, data engineering tools, and modern web technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                  : darkMode
                  ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat 
                  ? 'bg-white/20 text-white' 
                  : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
              }`}>
                {cat === 'All' ? SKILLS_DATA.length : SKILLS_DATA.filter((s) => s.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-indigo-950/20'
                  : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/60'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${
                    darkMode ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {skill.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                  skill.level === 'Proficient'
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60'
                    : 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60'
                }`}>
                  {skill.level}
                </span>
              </div>

              {/* Description */}
              {skill.description && (
                <p className={`text-xs leading-relaxed mb-4 min-h-[36px] ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {skill.description}
                </p>
              )}

              {/* Progress Bar & Metric */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                    Competency Score
                  </span>
                  <span className={`font-mono font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools & Practical Experience Strip */}
        <div className={`mt-12 p-6 rounded-2xl border ${
          darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Advanced MS Excel
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Formulas, Pivot Tables, Data modeling & Tabular analysis
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Mobile Hardware & BLE
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  GPS, Sensor APIs, Bluetooth Low Energy communication
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Database Engineering
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Normalized SQL schema design, relations & queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
