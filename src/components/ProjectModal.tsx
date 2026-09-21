import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ExternalLink, 
  Github, 
  Layers, 
  Target, 
  Cpu, 
  Activity, 
  Radio, 
  ShoppingBag, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-all ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100 shadow-indigo-950/40'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Gradient Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            id="close-project-modal"
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-black/25 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm mb-2">
            {project.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm mt-1">
            {project.subtitle}
          </p>

          {/* Metrics bar if available */}
          {project.metrics && (
            <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/20">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg font-bold font-mono">{m.value}</span>
                  <span className="text-xs text-white/80">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Tabs */}
        <div className={`px-6 border-b flex gap-4 ${
          darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-indigo-500 text-indigo-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture & Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('features')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'features'
                ? 'border-indigo-500 text-indigo-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Key Capabilities ({project.features.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1.5 flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  Problem Statement
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.problemStatement}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  Engineering Solution
                </h4>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.solution}
                </p>
              </div>

              {/* Technologies Breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 text-slate-200'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Detailed execution pipeline and architectural flow implemented in this capstone:
              </p>
              <div className="space-y-3">
                {project.architecturePoints.map((point, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                      darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                    darkMode ? 'bg-slate-800/40 border-slate-700/80' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`p-4 sm:p-6 border-t flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Category:</span>
            <span className="text-xs font-semibold text-indigo-500">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                darkMode
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
