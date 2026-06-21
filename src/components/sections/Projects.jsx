import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiCode, FiSearch } from 'react-icons/fi';

const GITHUB_USERNAME = 'KhushiTailor88';

const featuredProjects = [
  {
    name: 'Task Management SaaS',
    subtitle: 'Linear Clone',
    description: 'A production-ready task management platform with real-time issue tracking and collaboration capabilities, role-based authentication, and dashboard analytics.',
    tech: ['React.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Zustand'],
    emoji: '📋',
    color: 'from-indigo-600 to-violet-600',
    github: `https://github.com/${GITHUB_USERNAME}/task-api`,
    impact: 'Built a production-ready task management platform with real-time collaboration capabilities.',
    features: ['Real-time Tracking', 'Role Auth', 'Dashboard Analytics', 'Advanced Filtering'],
  },
  {
    name: 'Airbnb Clone',
    subtitle: 'Full Stack MERN',
    description: 'A scalable full-stack booking platform using MERN architecture with property listings, JWT authentication, booking management, and complete CRUD operations.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    emoji: '🏠',
    color: 'from-rose-500 to-pink-600',
    github: `https://github.com/${GITHUB_USERNAME}/wander-lust`,
    impact: 'Developed a scalable full-stack booking platform using MERN architecture.',
    features: ['Property Listing', 'JWT Auth', 'Booking System', 'REST APIs'],
  },
  {
    name: 'Hotel Management System',
    subtitle: 'Java Enterprise',
    description: 'A complete hotel operations management solution with room booking, check-in/checkout workflows, billing management, and an admin dashboard.',
    tech: ['Java', 'JSP', 'JDBC', 'MySQL'],
    emoji: '🏨',
    color: 'from-amber-500 to-orange-600',
    github: `https://github.com/${GITHUB_USERNAME}/https---github.com-KhushiTailor88-HOTEL_MANAGEMENT`,
    impact: 'Built a complete hotel operations management solution.',
    features: ['Room Booking', 'Check-in/out', 'Billing System', 'Admin Dashboard'],
  },
  {
    name: 'Khushi Finance',
    subtitle: 'Real Business Website',
    description: 'A professional finance advisory website for a real family business — helping customers explore financial services and connect with advisors. SEO optimized, fully responsive.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    emoji: '💰',
    color: 'from-green-500 to-emerald-600',
    github: `https://github.com/${GITHUB_USERNAME}?tab=repositories`,
    live: 'https://khushi-finance.vercel.app',
    impact: 'Real-world business platform solving actual business needs.',
    features: ['Service Showcase', 'Lead Generation', 'SEO Optimized', 'Inquiry Forms'],
    realWorld: true,
  },
];

const langColors = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Java: '#b07219',
  HTML: '#e34c26', CSS: '#563d7c', Python: '#3572A5', default: '#8b5cf6',
};

const RepoCard = ({ repo, isDark }) => (
  <div className={`project-card flex flex-col rounded-2xl border overflow-hidden group ${
    isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/40' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-md'
  }`}>
    <div className={`h-1.5 bg-gradient-to-r ${
      repo.language === 'Java' ? 'from-orange-500 to-red-500' :
      repo.language === 'JavaScript' ? 'from-yellow-500 to-amber-500' :
      repo.language === 'HTML' ? 'from-red-500 to-orange-500' :
      'from-indigo-500 to-purple-500'
    }`} />
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-start justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <FiCode size={14} className="text-indigo-400 flex-shrink-0" />
          <h3 className={`font-bold text-sm truncate group-hover:text-indigo-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {repo.name?.replace(/-/g, ' ').replace(/_/g, ' ')}
          </h3>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
            className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>
            <FiGithub size={13} />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
              className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-indigo-400 hover:bg-white/10' : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'}`}>
              <FiExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
      <p className={`text-xs leading-relaxed flex-1 mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {repo.description || 'No description provided.'}
      </p>
      <div className="flex items-center gap-3 text-xs">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColors[repo.language] || langColors.default }} />
            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{repo.language}</span>
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className={`flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><FiStar size={11} /> {repo.stargazers_count}</span>
        )}
        {repo.forks_count > 0 && (
          <span className={`flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><FiGitBranch size={11} /> {repo.forks_count}</span>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { isDark } = useTheme();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then(r => r.ok ? r.json() : Promise.reject('Failed'))
      .then(data => setRepos(Array.isArray(data) ? data.filter(r => !r.fork) : []))
      .catch(e => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const languages = ['All', ...new Set(repos.map(r => r.language).filter(Boolean))];
  const filtered = repos.filter(r =>
    (filter === 'All' || r.language === filter) &&
    (r.name.toLowerCase().includes(search.toLowerCase()) || (r.description || '').toLowerCase().includes(search.toLowerCase()))
  );
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-indigo-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// featured & github projects'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>My <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <span>⭐</span> Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((proj, i) => (
              <div key={i} className={`project-card rounded-2xl border overflow-hidden group ${
                isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/40' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl'
              }`}>
                <div className={`h-28 bg-gradient-to-br ${proj.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative z-10 text-5xl">{proj.emoji}</span>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {proj.realWorld && <span className="bg-green-500/80 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-lg font-semibold">Real Business</span>}
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-lg font-medium">Featured</span>
                  </div>
                  <div className="absolute bottom-2 left-3">
                    <p className="text-white/60 text-[10px] font-mono">{proj.subtitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`font-bold text-base mb-1.5 group-hover:text-indigo-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{proj.name}</h3>
                  <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{proj.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.features.map((f, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${isDark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t, j) => (
                      <span key={j} className={`px-2 py-0.5 rounded-lg text-[10px] font-medium ${isDark ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'}`}>{t}</span>
                    ))}
                  </div>

                  {/* Impact */}
                  <p className={`text-[10px] italic mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>🎯 {proj.impact}</p>

                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'}`}>
                      <FiGithub size={13} /> GitHub
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-green-400' : 'text-slate-600 hover:text-green-600'}`}>
                        <FiExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repos */}
        <div>
          <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <FiGithub size={18} className="text-indigo-400" /> All GitHub Repositories
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
              <FiSearch size={15} className="text-slate-400" />
              <input type="text" placeholder="Search repositories..." value={search} onChange={e => setSearch(e.target.value)}
                className={`bg-transparent text-sm outline-none w-full ${isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`} />
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.slice(0, 6).map(lang => (
                <button key={lang} onClick={() => setFilter(lang)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    filter === lang ? 'bg-indigo-500 text-white' :
                    isDark ? 'bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-500/30' : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300'
                  }`}>{lang}
                </button>
              ))}
            </div>
          </div>

          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => <div key={i} className={`h-36 rounded-2xl animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />)}
            </div>
          )}

          {error && (
            <div className={`text-center py-10 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
              <FiGithub size={36} className="mx-auto mb-3 opacity-50" />
              <p>Could not load GitHub repositories. <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">View on GitHub</a></p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {displayed.map(repo => <RepoCard key={repo.id} repo={repo} isDark={isDark} />)}
              </div>
              {filtered.length > 6 && (
                <div className="text-center">
                  <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
                    {showAll ? 'Show Less' : `Show All ${filtered.length} Repositories`}
                  </button>
                </div>
              )}
              {filtered.length === 0 && (
                <p className={`text-center py-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>No repositories match your search.</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
