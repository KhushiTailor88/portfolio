import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tectome.ai',
    location: 'Jaipur',
    period: 'Dec 2025 – May 2026',
    type: 'Full Stack Intern',
    color: 'from-indigo-500 to-purple-500',
    emoji: '🚀',
    tech: ['React.js', 'Node.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Zustand'],
    points: [
      'Developed a Task Management SaaS platform (Linear Clone) with real-time issue tracking and collaboration.',
      'Built responsive dashboard modules with analytics charts and advanced filtering capabilities.',
      'Implemented role-based authentication and authorization using JWT and Supabase.',
      'Integrated real-time synchronization for live updates across client sessions using Supabase realtime.',
      'Optimized frontend performance — reduced bundle size and improved load times significantly.',
    ],
  },
  {
    role: 'Java Developer Intern',
    company: 'CodeTech IT Solution',
    location: 'Remote',
    period: 'Jun 2025 – Jul 2025',
    type: 'Java Intern',
    color: 'from-orange-500 to-red-500',
    emoji: '☕',
    tech: ['Java', 'JSP', 'JDBC', 'MySQL'],
    points: [
      'Developed a Hotel Management System with complete room booking and billing workflows.',
      'Built booking and billing modules with automated invoice generation.',
      'Integrated MySQL database using JDBC for persistent data storage and retrieval.',
      'Implemented server-side validations and a responsive frontend UI using JSP.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Internshala',
    location: 'Remote',
    period: 'Aug 2024 – Oct 2024',
    type: 'Web Dev Intern',
    color: 'from-green-500 to-cyan-500',
    emoji: '🌐',
    tech: ['React.js', 'Node.js', 'MySQL'],
    points: [
      'Developed a Fitness Management Application with user workout tracking and goal setting.',
      'Implemented REST API integration for seamless frontend-backend data communication.',
      'Built fully responsive interfaces ensuring cross-device compatibility.',
    ],
  },
];

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// work_experience'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>My <span className="gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>3 Internships · 6+ Months of Hands-on Industry Experience</p>
        </div>

        <div className="relative">
          <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-indigo-500/30' : 'bg-indigo-200'}`} />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-6 md:gap-0 mb-8">
              <div className={`absolute left-4 md:left-1/2 top-7 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg z-10 flex items-center justify-center text-[9px]`}>
                {exp.emoji}
              </div>

              {/* Date (left side on desktop) */}
              <div className="hidden md:flex w-1/2 justify-end pr-10 pt-5">
                <div className="text-right">
                  <span className={`text-sm font-mono font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{exp.period}</span>
                  <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{exp.location}</div>
                </div>
              </div>

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2 md:pl-10">
                <div className={`rounded-2xl p-6 border transition-all hover:scale-[1.01] group ${
                  isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${exp.color} text-white text-sm group-hover:scale-110 transition-transform`}>
                        {exp.emoji}
                      </div>
                      <div>
                        <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                        <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-green-50 text-green-600 border border-green-200'}`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Mobile date */}
                  <p className={`md:hidden text-xs font-mono mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{exp.period} · {exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <FiCheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-1.5 pt-3 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                    {exp.tech.map((t, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded-lg text-[11px] font-medium ${isDark ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education at bottom */}
          <div className="relative flex gap-6 md:gap-0">
            <div className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg z-10 flex items-center justify-center text-[9px]">🎓</div>
            <div className="hidden md:flex w-1/2 justify-end pr-10 pt-5">
              <span className={`text-sm font-mono font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>2022 – 2026</span>
            </div>
            <div className="ml-14 md:ml-0 md:w-1/2 md:pl-10">
              <div className={`rounded-2xl p-5 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm">🎓</div>
                  <div>
                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>B.Tech – Computer Science Engineering</h3>
                    <p className="text-purple-400 text-xs">Amity University Rajasthan · CGPA: <span className="text-green-400 font-semibold">8.37/10</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
