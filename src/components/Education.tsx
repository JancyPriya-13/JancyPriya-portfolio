import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle,
  TrendingUp,
  School
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section
      id="education"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Track Record</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Academic Journey
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A consistent record of academic excellence throughout collegiate and schooling education, highlighted by an 87% distinction in BCA and 85% in MCA.
          </p>
        </div>

        {/* Academic Timeline */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 md:ml-32 space-y-12 pb-4">
          {EDUCATION_DATA.map((item, index) => {
            const isCollege = item.id.includes('mca') || item.id.includes('bca');
            return (
              <div key={item.id} className="relative pl-6 sm:pl-10">
                {/* Timeline Node Badge */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-110 ${
                    isCollege
                      ? 'bg-indigo-600 border-white text-white shadow-md shadow-indigo-600/30'
                      : darkMode
                      ? 'bg-slate-900 border-slate-700 text-slate-300'
                      : 'bg-white border-slate-300 text-slate-600 shadow-sm'
                  }`}
                >
                  {isCollege ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <School className="w-4 h-4" />
                  )}
                </div>

                {/* Left Desktop Passing Year Marker */}
                <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                  <span className={`text-xs font-bold font-mono ${
                    darkMode ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    {item.passingYear.split(' ')[0]}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                      : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                        {item.status === 'In Progress' ? 'Currently Pursuing' : 'Completed'}
                      </span>
                      <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.degree}
                      </h3>
                      <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item.institution}
                      </p>
                    </div>

                    {/* Grade Highlight Chip */}
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <div className={`px-3.5 py-1.5 rounded-xl border text-right ${
                        isCollege
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
                      }`}>
                        <div className="text-sm sm:text-base font-extrabold font-mono">
                          {item.grade}
                        </div>
                        {item.gradeDetail && (
                          <div className="text-[10px] font-medium opacity-80">
                            {item.gradeDetail}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{item.passingYear}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Skills Acquired */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Competencies Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
                            darkMode
                              ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Excellence Summary Banner */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border ${
          darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-indigo-50/60 border-indigo-100'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-base font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Consistent High Academic Achievement
                </h4>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Graduating with 87% marks in BCA and continuing distinction level performance with 85% aggregate in MCA at Dr. G.R. Damodaran College of Science.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
              >
                <span>Request Academic Transcripts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
