import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const skillCategories = [
  {
    title: 'Frontend', icon: '🎨', color: 'from-indigo-500 to-blue-500',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'Zustand'],
  },
  {
    title: 'Backend', icon: '⚙️', color: 'from-green-500 to-cyan-500',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'JSP', 'JDBC'],
  },
  {
    title: 'Database', icon: '🗄️', color: 'from-purple-500 to-pink-500',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Languages', icon: '💻', color: 'from-orange-500 to-red-500',
    skills: ['Java', 'JavaScript', 'Python', 'C++'],
  },
  {
    title: 'Cloud & Tools', icon: '☁️', color: 'from-yellow-500 to-orange-500',
    skills: ['AWS Cloud', 'Git', 'GitHub', 'VS Code', 'Eclipse'],
  },
  {
    title: 'CS Fundamentals', icon: '📐', color: 'from-rose-500 to-pink-500',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Database Design', 'State Management'],
  },
];

const skillLevels = {
  'React.js': 85, 'Node.js': 80, 'JavaScript': 85, 'HTML5': 95, 'CSS3': 90, 'Tailwind CSS': 82,
  'Java': 88, 'MySQL': 85, 'MongoDB': 78, 'PostgreSQL': 75, 'AWS Cloud': 70, 'Git': 88,
  'Express.js': 80, 'REST APIs': 82, 'JWT Authentication': 78, 'Supabase': 72, 'JSP': 80,
  'Python': 70, 'C++': 68, 'GitHub': 90, 'Zustand': 75, 'Next.js': 72,
};

const Skills = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <section id="skills" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// skills & expertise'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>My <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                  : isDark
                  ? 'bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-500/30 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
              }`}>
              {cat.icon} {cat.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className={`rounded-2xl p-8 border mb-10 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center text-xl`}>
              {active.icon}
            </div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{active.title}</h3>
          </div>
          <div className="space-y-4">
            {active.skills.map((skill, i) => {
              const level = skillLevels[skill] || 75;
              return (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{skill}</span>
                    <span className="text-sm text-indigo-400 font-mono">{level}%</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-100'}`}>
                    <div className={`h-full rounded-full bg-gradient-to-r ${active.color} transition-all duration-700`}
                      style={{ width: `${level}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All skill badges */}
        <div className="text-center">
          <h3 className={`text-base font-bold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap(c => c.skills).filter((v, i, a) => a.indexOf(v) === i).map((tech, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-xs font-medium border transition-all hover:scale-105 cursor-default ${
                isDark ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20'
                : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
