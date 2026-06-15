import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// education'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-lg'}`}>
          {/* Header Banner */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative flex items-center px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative z-10">
              <div className="text-5xl mb-2">🎓</div>
              <h3 className="text-white font-black text-xl">Amity University Rajasthan</h3>
              <p className="text-white/80 text-sm">Jaipur, Rajasthan, India</p>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right hidden sm:block">
              <div className="text-4xl font-black text-white">8.37</div>
              <div className="text-white/70 text-sm">CGPA / 10</div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className={`text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Degree</p>
                <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Bachelor of Technology</p>
                <p className="text-indigo-400 text-sm">Computer Science Engineering</p>
              </div>
              <div>
                <p className={`text-xs uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Duration</p>
                <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>2022 – 2026</p>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>4 Years Program</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'CGPA', value: '8.37 / 10', icon: '📊', color: 'from-green-500 to-emerald-500' },
                { label: 'Branch', value: 'CSE', icon: '💻', color: 'from-indigo-500 to-blue-500' },
                { label: 'Batch', value: '2022–2026', icon: '📅', color: 'from-purple-500 to-pink-500' },
              ].map(stat => (
                <div key={stat.label} className={`p-4 rounded-xl border flex items-center gap-3 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg`}>{stat.icon}</div>
                  <div>
                    <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
