import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Smartphone, 
  BrainCircuit, 
  Sparkles, 
  Layers, 
  Activity, 
  MapPin, 
  Search, 
  ShieldCheck, 
  Zap,
  Sliders,
  Radio
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mini interactive demo state for the featured IoT wearable tracker & AI recommender
  const [activeSimTab, setActiveSimTab] = useState<'tracker' | 'recommender'>('tracker');
  const [simCoords, setSimCoords] = useState<{ lat: number; lng: number; status: string; battery: number }>({
    lat: 11.8745,
    lng: 75.3704, // Kannur coordinates
    status: 'Safe Zone (Puzhathi, Kannur)',
    battery: 92
  });
  const [sosActive, setSosActive] = useState(false);

  // Mini AI Recommender state
  const [selectedInterest, setSelectedInterest] = useState<'coding' | 'iot' | 'ai'>('coding');

  const categories = ['All', 'Mobile & IoT', 'AI & Data Science', 'Web & Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const simulateMovement = () => {
    const latOffset = (Math.random() - 0.5) * 0.005;
    const lngOffset = (Math.random() - 0.5) * 0.005;
    setSimCoords(prev => ({
      lat: Number((prev.lat + latOffset).toFixed(4)),
      lng: Number((prev.lng + lngOffset).toFixed(4)),
      status: 'Live Ping Active (Kannur Corridor)',
      battery: Math.max(10, prev.battery - 1)
    }));
  };

  const toggleSOS = () => {
    setSosActive(prev => !prev);
  };

  return (
    <section
      id="projects"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/70 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Implementations</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Projects
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Featured technical capstones spanning IoT hardware-mobile integration, machine learning recommendation systems, and academic software solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-[1.02]'
                  : darkMode
                  ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-950/30'
                  : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/70'
              }`}
            >
              {/* Card Top Banner / Gradient Header */}
              <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm">
                    {project.badge}
                  </span>
                  <span className="text-xs text-white/80 font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  {project.subtitle}
                </p>

                {/* Key Metrics Chips */}
                {project.metrics && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/20">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-black/20 text-xs font-mono backdrop-blur-sm"
                      >
                        <span className="text-white/70 mr-1.5">{m.label}:</span>
                        <strong className="text-white">{m.value}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 block">
                      Core Implementation Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((f, i) => (
                        <li key={i} className={`text-xs flex items-start gap-2 ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          <span className="text-indigo-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-medium border ${
                          darkMode
                            ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                      darkMode
                        ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Capstone Simulator / Live Proof of Concept */}
        <div
          id="project-interactive-sandbox"
          className={`rounded-2xl border p-6 sm:p-8 transition-all ${
            darkMode
              ? 'bg-slate-900 border-slate-800 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Capstone Demonstrator</span>
              </div>
              <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Explore A. Jancy Priya's Capstone Systems in Action
              </h3>
              <p className={`text-xs sm:text-sm mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Simulate real telemetry from the Wearable Location Tracker or test the AI Recommendation ranking engine.
              </p>
            </div>

            {/* Switcher */}
            <div className="flex items-center gap-2 p-1 rounded-xl border self-start sm:self-center">
              <button
                type="button"
                onClick={() => setActiveSimTab('tracker')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSimTab === 'tracker'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                Wearable IoT Tracker
              </button>
              <button
                type="button"
                onClick={() => setActiveSimTab('recommender')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSimTab === 'recommender'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                AI Recommender
              </button>
            </div>
          </div>

          {/* Simulator Content */}
          {activeSimTab === 'tracker' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Telemetry Visualizer */}
              <div className="lg:col-span-7 space-y-4">
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-500">
                        GPS SATELLITE LOCK: ACTIVE
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      BATTERY: {simCoords.battery}%
                    </span>
                  </div>

                  {/* Simulated Map Display */}
                  <div className={`h-44 rounded-lg relative overflow-hidden border flex flex-col justify-between p-4 ${
                    darkMode 
                      ? 'bg-slate-900/90 border-slate-700' 
                      : 'bg-indigo-50/50 border-indigo-200'
                  }`}>
                    {/* Grid map pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-indigo-500">
                        Map Region: Kannur, Kerala (670011)
                      </span>
                      <span className={`text-[11px] px-2 py-0.5 rounded ${
                        sosActive 
                          ? 'bg-rose-500 text-white font-bold animate-pulse' 
                          : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                      }`}>
                        {sosActive ? 'EMERGENCY SOS SENT!' : 'Geofence: Inside Boundary'}
                      </span>
                    </div>

                    {/* Pin position */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="flex flex-col items-center">
                        <div className={`p-2 rounded-full ${
                          sosActive ? 'bg-rose-500 animate-bounce text-white' : 'bg-indigo-600 text-white shadow-lg'
                        }`}>
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold font-mono mt-1 text-indigo-500">
                          {simCoords.lat}° N, {simCoords.lng}° E
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Telemetry Beacon ID: JP-IOT-04</span>
                      <span>Signal: 98% (BLE 5.2)</span>
                    </div>
                  </div>
                </div>

                {/* Telemetry Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={simulateMovement}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    Simulate Device GPS Step
                  </button>
                  <button
                    type="button"
                    onClick={toggleSOS}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      sosActive
                        ? 'bg-slate-700 text-white'
                        : 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {sosActive ? 'Reset SOS Alert' : 'Trigger SOS Panic Button'}
                  </button>
                </div>
              </div>

              {/* Explanatory Sidebar */}
              <div className="lg:col-span-5 space-y-3 text-xs sm:text-sm">
                <h4 className={`font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  How the Wearable System Functions:
                </h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  The wearable hardware contains a micro-GPS receiver and Bluetooth transmitter. It pairs automatically with an Android companion app built with background services.
                </p>
                <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                  darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}>
                  <p className="font-semibold text-indigo-500">1. Coordinate Acquisition:</p>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    Captures NMEA GPS sentences and filters high-precision latitude & longitude.
                  </p>
                  <p className="font-semibold text-indigo-500 mt-2">2. Geofence Boundary Check:</p>
                  <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    Triggers local and cloud push notifications if the wearer exits designated safe zones.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* AI Recommender Simulator */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 block">
                  Select User Interest Profile:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInterest('coding')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedInterest === 'coding'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    Computer Science / Java & Web
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedInterest('iot')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedInterest === 'iot'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    IoT Hardware & Wearables
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedInterest('ai')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedInterest === 'ai'
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    Machine Learning & Analytics
                  </button>
                </div>

                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-mono font-bold text-indigo-500 block mb-2">
                    Predicted Top Recommendations (Cosine Similarity Ranking):
                  </span>

                  <div className="space-y-2">
                    {selectedInterest === 'coding' && (
                      <>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Java Enterprise Architecture Masterclass</span>
                          <span className="font-mono text-emerald-500 font-bold">96.8% match</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Spring Boot & Microservices Handbook</span>
                          <span className="font-mono text-emerald-500 font-bold">92.4% match</span>
                        </div>
                      </>
                    )}

                    {selectedInterest === 'iot' && (
                      <>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Wearable Sensor Development Kit (BLE + GPS)</span>
                          <span className="font-mono text-emerald-500 font-bold">98.2% match</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Smart Beacon & Telemetry Gateway</span>
                          <span className="font-mono text-emerald-500 font-bold">94.1% match</span>
                        </div>
                      </>
                    )}

                    {selectedInterest === 'ai' && (
                      <>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Python Scikit-Learn Recommender Framework</span>
                          <span className="font-mono text-emerald-500 font-bold">97.5% match</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="font-semibold">Deep Learning for User Embeddings</span>
                          <span className="font-mono text-emerald-500 font-bold">91.8% match</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3 text-xs sm:text-sm">
                <h4 className={`font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Collaborative & Content-Based Architecture
                </h4>
                <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                  The algorithm maps user historical browsing vectors against item TF-IDF matrices, applying cosine distance formulas to predict items with maximum relevance.
                </p>
                <div className={`p-3 rounded-lg border font-mono text-[11px] ${
                  darkMode ? 'bg-slate-800/60 border-slate-700 text-indigo-300' : 'bg-slate-100 border-slate-200 text-indigo-700'
                }`}>
                  Similarity(U, I) = (Vector_U • Vector_I) / (||Vector_U|| * ||Vector_I||)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
