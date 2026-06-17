import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';

const TypewriterText = ({ texts }) => {
  const el = useRef(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (!el.current) return;
      const current = texts[idx.current];
      if (!deleting.current) {
        el.current.textContent = current.slice(0, ++charIdx.current);
        if (charIdx.current === current.length) {
          deleting.current = true;
          setTimeout(tick, 2200);
          return;
        }
      } else {
        el.current.textContent = current.slice(0, --charIdx.current);
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % texts.length;
        }
      }
      setTimeout(tick, deleting.current ? 50 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [texts]);

  return <span ref={el} className="text-indigo-400" />;
};

const floatingTechs = [
  { label: 'React', emoji: '⚛️', delay: '0s', top: '15%', right: '-2%' },
  { label: 'Node.js', emoji: '🟢', delay: '1s', top: '55%', right: '-2%' },
  { label: 'Java', emoji: '☕', delay: '2s', bottom: '20%', right: '8%' },
  { label: 'AWS', emoji: '☁️', delay: '1.5s', top: '20%', left: '-2%' },
  { label: 'GitHub', emoji: '🐙', delay: '0.5s', top: '60%', left: '-2%' },
  { label: 'MongoDB', emoji: '🍃', delay: '2.5s', bottom: '15%', left: '8%' },
];

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50'
      }`}
    >
      {isDark && (
        <>
          <div className="orb w-[500px] h-[500px] bg-indigo-600 top-[-15%] right-[-10%]" />
          <div className="orb w-96 h-96 bg-purple-700 bottom-[-10%] left-[-8%]" style={{ animationDelay: '3s' }} />
          <div className="orb w-64 h-64 bg-pink-600 top-[40%] left-[5%]" style={{ animationDelay: '1.5s' }} />
        </>
      )}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-1">
                Khushi Tailor
              </span>
            </h1>

            <div className={`text-lg md:text-xl font-mono mb-6 min-h-[2rem] ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <span className="text-indigo-400">{'> '}</span>
              <TypewriterText texts={[
                'Full Stack Developer',
                'MERN Stack Developer',
                'Java Developer',
                'AWS Enthusiast',
                'Software Engineer',
              ]} />
              <span className="text-indigo-400 animate-pulse">_</span>
            </div>

            <p className={`text-base md:text-lg italic mb-3 font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
              "I build scalable, modern, and user-focused web applications that solve real-world business problems."
            </p>

            <p className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Full Stack Developer with internship experience building production-ready applications using{' '}
              <span className="text-indigo-400 font-medium">React.js</span>,{' '}
              <span className="text-green-400 font-medium">Node.js</span>,{' '}
              <span className="text-orange-400 font-medium">Java</span>,{' '}
              <span className="text-yellow-400 font-medium">JavaScript</span>,{' '}
              <span className="text-blue-400 font-medium">MySQL</span>,{' '}
              <span className="text-green-500 font-medium">MongoDB</span>, and{' '}
              <span className="text-orange-500 font-medium">AWS</span>. Passionate about creating high-performance software products.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <FiExternalLink size={16} /> View Projects
              </a>
              <a href="/resume.pdf" download className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all hover:scale-105 ${isDark ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white' : 'border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white'}`}>
                <FiDownload size={16} /> Resume
              </a>
              <a href="#contact" className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all hover:scale-105 ${isDark ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' : 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'}`}>
                <FiMail size={16} /> Contact Me
              </a>
              <a href="mailto:khushitailor138@gmail.com" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-sm hover:scale-105 transition-all shadow-lg shadow-pink-500/20">
                Hire Me 🚀
              </a>
            </div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/KhushiTailor88', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/khushi-tailor-ab6b9a2ba/', label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: 'mailto:khushitailor138@gmail.com', label: 'Email' },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={s.label}
                  className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${isDark ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/50' : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative flex-shrink-0">
            {/* Floating tech badges */}
            {floatingTechs.map((t, i) => (
              <div key={i} className={`absolute z-20 px-2.5 py-1.5 rounded-xl text-xs font-semibold border shadow-lg whitespace-nowrap hidden lg:flex items-center gap-1.5 ${
                isDark ? 'bg-slate-900/80 backdrop-blur border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
                style={{ top: t.top, bottom: t.bottom, left: t.left, right: t.right, animation: `float ${4 + i * 0.5}s ease-in-out infinite`, animationDelay: t.delay }}>
                <span>{t.emoji}</span>{t.label}
              </div>
            ))}

            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-25 animate-pulse" />
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full p-1 animate-spin-slow"
                style={{ background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)' }}>
                <div className={`w-full h-full rounded-full ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`} />
              </div>
              {/* Inner */}
              <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex flex-col items-center justify-center">
                <div className="text-6xl mb-1">👩‍💻</div>
                <p className="text-xs text-indigo-400 font-mono font-semibold">Full Stack Dev</p>
                <p className="text-xs text-purple-400 font-mono">CGPA 8.37</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
          <span className={`text-[10px] font-mono tracking-widest ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>SCROLL</span>
          <div className="w-5 h-8 rounded-full border-2 border-indigo-500/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
