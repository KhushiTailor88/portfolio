import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
    badge: 'Cloud',
  },
  {
    title: 'Data Structures and Algorithms in Java',
    issuer: 'Online Certification',
    icon: '📐',
    color: 'from-indigo-500 to-blue-500',
    badge: 'DSA',
  },
  {
    title: 'Front-End and Back-End Development',
    issuer: 'Professional Certificate',
    icon: '🌐',
    color: 'from-purple-500 to-pink-500',
    badge: 'Full Stack',
  },
  {
    title: 'PHP and MySQL Training',
    issuer: 'Training Certification',
    icon: '🗄️',
    color: 'from-green-500 to-cyan-500',
    badge: 'Database',
  },
];

const Certifications = () => {
  const { isDark } = useTheme();

  return (
    <section id="certifications" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// certifications'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl border transition-all hover:scale-[1.02] group ${
              isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
            }`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                {cert.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className={`font-bold text-sm leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap ${
                    isDark ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                  }`}>{cert.badge}</span>
                </div>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
