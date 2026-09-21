import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  Languages, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Lightbulb, 
  BookOpen,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO, LANGUAGES_DATA } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'languages' | 'values'>('narrative');

  const coreStrengths = [
    {
      title: 'Strong Academic Foundations',
      description: 'Maintained an 87% score in BCA and 85% in MCA, demonstrating thorough mastery of core computer science principles and software engineering theory.',
      icon: GraduationCap,
      color: 'text-indigo-500 bg-indigo-500/10'
    },
    {
      title: 'Practical Software & IoT Engineering',
      description: 'Applied theoretical concepts by building practical systems like the Location Tracking wearable system and AI product recommender.',
      icon: Lightbulb,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Multi-Lingual Communication',
      description: 'Fluent in English, Tamil, Malayalam, and conversational Hindi, facilitating seamless team communication and cross-regional collaboration.',
      icon: Languages,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      title: 'Disciplined Problem Solver',
      description: 'Eager to deconstruct complex challenges into modular, clean algorithmic solutions across Java, Python, and mobile platforms.',
      icon: Compass,
      color: 'text-cyan-500 bg-cyan-500/10'
    }
  ];

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About A. Jancy Priya
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A dedicated Computer Applications postgraduate scholar bridging software development, mobile programming, and artificial intelligence.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Profile Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
              }`}
            >
              {/* Profile Avatar / Initials Visual */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-indigo-500/30">
                  JP
                </div>
                <div>
                  <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-indigo-500 font-semibold mt-0.5">
                    MCA Scholar (2025–Present)
                  </p>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Dr. G.R. Damodaran College of Science
                  </p>
                </div>
              </div>

              {/* Essential Details Grid */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className={`block font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Residence / Location:
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      Kannur, Kerala, India (670011)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className={`block font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Education Level:
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      BCA Graduate (87%), Currently Pursuing MCA (85%)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className={`block font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Date of Birth:
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      13.04.2004
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className={`block font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Languages Known:
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      English, Tamil, Malayalam, Hindi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className={`block font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Career Objective:
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      Full-Stack Software Development, Mobile Engineering & AI Solutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote / Philosophy Badge */}
              <div className={`mt-6 pt-5 border-t text-xs leading-relaxed italic ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}>
                "Committed to writing clean, maintainable code and continuously upgrading skills in modern development and intelligent algorithms."
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Narrative & Pillars */}
          <div className="lg:col-span-7">
            {/* View Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl border mb-6 max-w-md">
              <button
                type="button"
                onClick={() => setActiveTab('narrative')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'narrative'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Biography & Journey
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('languages')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'languages'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Language Fluency
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'values'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Pillars
              </button>
            </div>

            {/* Tab 1: Narrative */}
            {activeTab === 'narrative' && (
              <div className="space-y-4">
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <h4 className={`text-lg font-bold font-display mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Academic Rigor & Engineering Passion
                  </h4>
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    My journey in computer science began in Kannur, Kerala, and deepened during my undergraduate degree in Computer Applications (BCA) at Dr. G.R. Damodaran College of Science, where I completed my program with an outstanding <strong>87% distinction</strong>. 
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Currently pursuing my <strong>Master of Computer Applications (MCA)</strong> at the same esteemed institution, I continue to excel with 83% in the 1st semester and 85% in the 2nd semester. Alongside coursework, I have actively expanded my practical skills through hands-on technical projects:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-indigo-50/50 border-indigo-100'}`}>
                      <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider block mb-1">
                        IoT & Mobile
                      </span>
                      <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Engineered a wearable location tracking device with real-time Android telemetry & GPS sensor alerts.
                      </p>
                    </div>
                    <div className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-cyan-50/50 border-cyan-100'}`}>
                      <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider block mb-1">
                        AI & Machine Learning
                      </span>
                      <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Built a personalized product recommendation engine in Python using hybrid collaborative & content-based filtering.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100/70 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Open to full-time Software Developer roles, Graduate Trainee, and Technical Internships.
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-indigo-500 hover:text-indigo-400 shrink-0 ml-2"
                  >
                    Connect &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* Tab 2: Languages */}
            {activeTab === 'languages' && (
              <div className="space-y-4">
                <div
                  className={`p-6 rounded-2xl border ${
                    darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <h4 className={`text-lg font-bold font-display mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Linguistic Capabilities
                  </h4>
                  <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Communication across diverse cultural and geographic teams is one of my strongest assets.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LANGUAGES_DATA.map((lang, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border transition-all ${
                          darkMode ? 'bg-slate-800/50 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-indigo-500">
                              {lang.language}
                            </span>
                            {lang.nativeScript && (
                              <span className="text-xs text-slate-400 font-mono">
                                ({lang.nativeScript})
                              </span>
                            )}
                          </div>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            darkMode ? 'bg-slate-700 text-slate-300' : 'bg-white text-slate-600 border border-slate-200'
                          }`}>
                            {lang.fluency.split('/')[0]}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-1.5">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                            style={{ width: `${lang.proficiency}%` }}
                          />
                        </div>
                        <span className={`text-[11px] block ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {lang.fluency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Core Values & Strengths */}
            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreStrengths.map((strength, idx) => {
                  const IconComp = strength.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-xl border transition-all ${
                        darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3.5 ${strength.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className={`text-sm font-bold font-display mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {strength.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {strength.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
