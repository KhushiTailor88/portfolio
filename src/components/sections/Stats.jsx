import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const counters = [
  { label: 'Internships', value: 3, suffix: '', icon: '🏢' },
  { label: 'Months Experience', value: 6, suffix: '+', icon: '⏱️' },
  { label: 'Real Projects', value: 4, suffix: '+', icon: '🚀' },
  { label: 'CGPA', value: 8.37, suffix: '', icon: '🎓', decimals: 2 },
  { label: 'Hours of Coding', value: 1000, suffix: '+', icon: '💻' },
];

const useCounter = (target, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(parseFloat((eased * target).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, decimals]);

  return { count, ref };
};

const Counter = ({ item, isDark }) => {
  const { count, ref } = useCounter(item.value, 2000, item.decimals || 0);
  return (
    <div ref={ref} className={`text-center p-6 rounded-2xl border transition-all hover:scale-105 group ${
      isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/40' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-lg'
    }`}>
      <div className="text-3xl mb-2 group-hover:animate-bounce">{item.icon}</div>
      <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
        {item.decimals ? count.toFixed(item.decimals) : Math.floor(count)}{item.suffix}
      </div>
      <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.label}</div>
    </div>
  );
};

const Stats = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-16 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-indigo-50 to-purple-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {counters.map((item, i) => (
            <Counter key={i} item={item} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
