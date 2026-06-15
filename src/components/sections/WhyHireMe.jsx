import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiCheckCircle } from 'react-icons/fi';

const reasons = [
  { text: 'Production project experience (Task Management SaaS at Tectome.ai)', icon: '🚀' },
  { text: 'Real-world business project (Khushi Finance) solving actual business needs', icon: '💼' },
  { text: 'Full-stack development expertise — React, Node.js, Java, MERN, AWS', icon: '💻' },
  { text: 'Strong problem-solving and DSA foundation', icon: '📐' },
  { text: 'Quick learner and collaborative team player across 3 internships', icon: '🤝' },
  { text: 'Experience with modern technologies and cloud platforms (AWS)', icon: '☁️' },
];

const WhyHireMe = () => {
  const { isDark } = useTheme();

  return (
    <section id="why-hire" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// recruiter_section'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Why <span className="gradient-text">Hire Me?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-4 text-sm max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Here's why I would be a valuable addition to your engineering team.
          </p>
        </div>

        <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-lg'}`}>
          {/* Top banner */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-5 flex items-center gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-white font-bold text-base">Recruiter's Perspective</h3>
              <p className="text-white/70 text-xs">This candidate has practical experience, built real products, and would be a valuable addition to any engineering team.</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((reason, i) => (
                <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border transition-all hover:scale-[1.01] group ${
                  isDark ? 'bg-white/5 border-white/10 hover:border-green-500/30' : 'bg-white border-slate-200 hover:border-green-300'
                }`}>
                  <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{reason.icon}</span>
                  <div className="flex items-start gap-2">
                    <FiCheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`rounded-xl p-6 text-center border ${isDark ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'}`}>
              <p className={`text-base font-bold mb-2 ${isDark ? 'text-indigo-300' : 'text-indigo-800'}`}>
                Actively seeking Software Engineer & Full Stack Developer roles 🚀
              </p>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                📍 Jaipur, Rajasthan · Open to Remote · Open to Relocation
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="mailto:khushitailor138@gmail.com"
                  className="btn-primary text-sm py-2 px-5 flex items-center gap-2">
                  📩 Hire Me
                </a>
                <a href="/resume.pdf" download
                  className="btn-secondary text-sm py-2 px-5">
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
