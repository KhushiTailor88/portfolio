import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiExternalLink } from 'react-icons/fi';

const GITHUB_USERNAME = 'KhushiTailor88';

const Footer = () => {
  const { isDark } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FiGithub size={18} />, href: `https://github.com/${GITHUB_USERNAME}`, label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/khushi-tailor-ab6b9a2ba/', label: 'LinkedIn' },
    { icon: <FiMail size={18} />, href: 'mailto:khushitailor138@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`border-t ${isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-500/30">
                KT
              </div>
              <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Khushi<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Building scalable software and transforming ideas into digital experiences. Passionate about Full Stack Development and Cloud.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h3>
            <div className="flex gap-3 mb-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`p-2.5 rounded-xl border transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300'
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="space-y-1">
              <p className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                📍 Jaipur, India &nbsp;|&nbsp; Open to Remote
              </p>
              <a href="https://khushi-finance.vercel.app" target="_blank" rel="noopener noreferrer" className={`text-xs flex items-center gap-1 text-indigo-400 hover:underline`}>
                🏢 Khushi Finance <FiExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <p className={`text-sm flex items-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Designed & Developed by <span className="text-indigo-400 font-semibold">Khushi Tailor</span>
            {' '}© 2026
          </p>
          <div className="flex items-center gap-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className={`text-[10px] font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>BUILT WITH</span>
            <div className="flex gap-2">
              <span title="React">⚛️</span>
              <span title="Tailwind">🎨</span>
              <span title="Framer Motion">✨</span>
            </div>
          </div>
          <p className={`text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
            Building the future, one commit at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
