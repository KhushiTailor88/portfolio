import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiCode, FiCloud, FiLayers, FiTarget } from 'react-icons/fi';

const cards = [
  { icon: <FiCode size={22} />, title: 'Full Stack Dev', desc: 'End-to-end web apps with React.js, Node.js, Java, JSP, REST APIs.', color: 'from-indigo-500 to-blue-500' },
  { icon: <FiCloud size={22} />, title: 'Cloud Enthusiast', desc: 'AWS Cloud Foundations certified, building scalable cloud solutions.', color: 'from-purple-500 to-pink-500' },
  { icon: <FiLayers size={22} />, title: 'MERN Stack', desc: 'MongoDB, Express.js, React.js, Node.js — production-ready apps.', color: 'from-green-500 to-cyan-500' },
  { icon: <FiTarget size={22} />, title: 'Problem Solver', desc: 'Strong DSA foundation — solving complex engineering challenges.', color: 'from-orange-500 to-red-500' },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// about_me'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className={`rounded-2xl p-8 mb-5 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg">KT</div>
                <div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>Khushi Tailor</h3>
                  <p className="text-indigo-400 text-sm">Full Stack Developer | MERN Stack</p>
                </div>
              </div>
              <p className={`leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I am a <span className="text-indigo-400 font-semibold">Computer Science Engineering</span> graduate from <span className="text-purple-400 font-semibold">Amity University Rajasthan</span> with a CGPA of <span className="text-green-400 font-semibold">8.37/10</span>.
              </p>
              <p className={`leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I have practical experience through <span className="text-yellow-400 font-semibold">3 internships</span> and personal projects, where I developed full-stack applications using modern technologies. I enjoy designing clean user experiences, building scalable backend systems, and solving complex problems through code.
              </p>
              <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I am actively seeking opportunities as a <span className="text-pink-400 font-semibold">Software Engineer</span>, <span className="text-indigo-400 font-semibold">Full Stack Developer</span>, or <span className="text-green-400 font-semibold">Backend Developer</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'University', value: 'Amity University RJ' },
                { label: 'CGPA', value: '8.37 / 10' },
                { label: 'Internships', value: '3 Completed' },
                { label: 'Status', value: 'Open to Work 🟢' },
              ].map(item => (
                <div key={item.label} className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <p className={`text-xs uppercase tracking-wider mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                  <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {cards.map((card, i) => (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border transition-all hover:scale-[1.02] group ${
                isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300'
              }`}>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>{card.icon}</div>
                <div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{card.title}</h4>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{card.desc}</p>
                </div>
              </div>
            ))}

            <div className={`grid grid-cols-3 gap-3 p-5 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
              {[
                { num: '3', label: 'Internships' },
                { num: '4+', label: 'Projects' },
                { num: '8.37', label: 'CGPA' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black gradient-text">{stat.num}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
