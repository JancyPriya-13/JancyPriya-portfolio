import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  Sparkles, 
  Code2, 
  Smartphone, 
  BrainCircuit, 
  Award,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS_STATS } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const skillPills = [
    { label: 'Java & OOP', icon: Code2, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { label: 'Python & AI', icon: BrainCircuit, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Mobile Programming', icon: Smartphone, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
    { label: 'Academic Excellence (87%)', icon: Award, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div 
        className={`absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full blur-3xl opacity-20 pointer-events-none ${
          darkMode ? 'bg-indigo-600/30' : 'bg-indigo-300/40'
        }`} 
      />
      <div 
        className={`absolute top-48 right-10 w-[350px] h-[250px] rounded-full blur-3xl opacity-15 pointer-events-none ${
          darkMode ? 'bg-cyan-500/30' : 'bg-cyan-200/40'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Academic & Availability Status Badge */}
            <div
              id="hero-status-badge"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border mb-6 transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-indigo-300 shadow-sm'
                  : 'bg-indigo-50/90 border-indigo-100 text-indigo-700 shadow-sm'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>MCA Scholar @ Dr. G.R. Damodaran College of Science</span>
            </div>

            {/* Main Name Heading */}
            <h1
              id="hero-developer-name"
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-4 leading-[1.1] ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Sub-headline / Core Roles */}
            <p
              id="hero-role-tagline"
              className={`text-lg sm:text-xl font-semibold mb-3 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              Master of Computer Applications (MCA) • Aspiring Software Engineer
            </p>

            {/* Short Tagline */}
            <p
              id="hero-short-bio"
              className={`text-base sm:text-lg mb-6 max-w-2xl leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {PERSONAL_INFO.tagline}
            </p>

            {/* Tech & Specialization Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillPills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border ${pill.color}`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-resume"
                type="button"
                onClick={onOpenResume}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-cta-contact"
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all ${
                  darkMode
                    ? 'border-transparent text-indigo-400 hover:text-indigo-300 hover:bg-indigo-950/40'
                    : 'border-transparent text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50/70'
                }`}
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Contact & Location Info with Copy */}
            <div
              className={`w-full pt-6 border-t flex flex-wrap items-center gap-4 text-xs ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Kannur, Kerala, India</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className={`p-1 rounded transition-colors ${
                    darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>+91 9074472292</span>
                <button
                  type="button"
                  onClick={copyPhone}
                  title="Copy phone to clipboard"
                  className={`p-1 rounded transition-colors ${
                    darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Console / Quick Spec Card */}
          <div className="lg:col-span-5">
            <div
              id="hero-terminal-card"
              className={`rounded-2xl border transition-all shadow-xl overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 shadow-indigo-950/20'
                  : 'bg-white border-slate-200 shadow-slate-200/60'
              }`}
            >
              {/* Terminal Window Header */}
              <div
                className={`px-4 py-3 border-b flex items-center justify-between ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-100/80 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className={`text-xs font-mono ml-2 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    ajancypriya_profile.json
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Code/Spec Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <div className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  <p className="text-slate-500 dark:text-slate-500 italic mb-2">
                    // Computer Applications Scholar & Developer
                  </p>
                  <p>
                    <span className="text-indigo-500">const</span> developer = &#123;
                  </p>
                  <div className="pl-4 space-y-1 my-1">
                    <p>
                      <span className="text-cyan-500">name</span>: <span className="text-amber-500 dark:text-amber-300">"{PERSONAL_INFO.name}"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-500">qualification</span>: <span className="text-amber-500 dark:text-amber-300">"MCA (Pursuing) | BCA (87%)"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-500">institution</span>: <span className="text-amber-500 dark:text-amber-300">"Dr. G.R. Damodaran College"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-500">location</span>: <span className="text-amber-500 dark:text-amber-300">"Kannur, Kerala"</span>,
                    </p>
                    <p>
                      <span className="text-cyan-500">languages</span>: [<span className="text-emerald-500">"Tamil"</span>, <span className="text-emerald-500">"Malayalam"</span>, <span className="text-emerald-500">"English"</span>, <span className="text-emerald-500">"Hindi"</span>],
                    </p>
                    <p>
                      <span className="text-cyan-500">coreTech</span>: [
                    </p>
                    <div className="pl-4 text-emerald-500">
                      <span>"Java (OOP/JDBC)"</span>, <span>"Python (ML/Data)"</span>, <br />
                      <span>"Mobile Programming"</span>, <span>"HTML/CSS/Tailwind"</span>
                    </div>
                    <p>],</p>
                    <p>
                      <span className="text-cyan-500">keyProjects</span>: &#123;
                    </p>
                    <div className="pl-4 space-y-0.5">
                      <p className="text-slate-400">
                        p1: <span className="text-rose-400">"Location Tracking (Wearable IoT)"</span>,
                      </p>
                      <p className="text-slate-400">
                        p2: <span className="text-rose-400">"Product Recommendation (AI)"</span>
                      </p>
                    </div>
                    <p>&#125;,</p>
                    <p>
                      <span className="text-cyan-500">availableFor</span>: <span className="text-emerald-400">"Software Engineering Roles & Internships"</span>
                    </p>
                  </div>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Card Footer Highlights */}
              <div
                className={`px-5 py-4 border-t grid grid-cols-2 gap-3 text-center ${
                  darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-indigo-500 font-display">87.0%</span>
                  <span className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    BCA Distinction
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-cyan-500 font-display">85.0%</span>
                  <span className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    MCA Sem Aggregate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {HIGHLIGHTS_STATS.map((stat, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-indigo-500 mb-1">
                  {stat.value}
                </div>
                <div className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {stat.label}
                </div>
                <div className={`text-[11px] mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
