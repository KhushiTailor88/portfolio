import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiGithub, FiStar, FiUsers, FiBookOpen, FiGitBranch } from 'react-icons/fi';

const GITHUB_USERNAME = 'khushitailor';

const GitHub = () => {
  const { isDark } = useTheme();
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        setProfile(profileData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Language stats
  const langCounts = {};
  repos.forEach(r => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const topLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const totalRepoCount = topLangs.reduce((s, [, c]) => s + c, 0);

  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
  };

  const stats = profile ? [
    { icon: <FiBookOpen />, label: 'Public Repos', value: profile.public_repos },
    { icon: <FiUsers />, label: 'Followers', value: profile.followers },
    { icon: <FiGitBranch />, label: 'Following', value: profile.following },
    { icon: <FiStar />, label: 'Stars Earned', value: repos.reduce((s, r) => s + r.stargazers_count, 0) },
  ] : [];

  return (
    <section id="github" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// github_stats'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-28 rounded-2xl animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
            ))}
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className={`p-6 rounded-2xl border text-center transition-all hover:scale-105 ${
                  isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-slate-50 border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}>
                  <div className="text-indigo-400 flex justify-center mb-2 text-xl">{stat.icon}</div>
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Contribution Graph (embed from GitHub) */}
              <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className={`px-6 py-4 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Contribution Graph</h3>
                </div>
                <div className="p-4">
                  <img
                    src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
                    alt="GitHub Contribution Graph"
                    className="w-full rounded-lg"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                  <p className={`text-xs text-center mt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    GitHub contributions over the past year
                  </p>
                </div>
              </div>

              {/* Language Usage */}
              <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className={`px-6 py-4 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Most Used Languages</h3>
                </div>
                <div className="p-6 space-y-4">
                  {topLangs.map(([lang, count], i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColors[lang] || '#8b5cf6' }} />
                          <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{lang}</span>
                        </div>
                        <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {Math.round((count / totalRepoCount) * 100)}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${Math.round((count / totalRepoCount) * 100)}%`,
                            backgroundColor: languageColors[lang] || '#8b5cf6',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Stats Cards (via github-readme-stats) */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`rounded-2xl border overflow-hidden flex items-center justify-center p-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${isDark ? 'tokyonight' : 'default'}&hide_border=true&bg_color=00000000&title_color=6366f1&icon_color=8b5cf6&text_color=${isDark ? 'c9d1d9' : '374151'}`}
                  alt="GitHub Stats"
                  className="w-full max-w-md"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className={`rounded-2xl border overflow-hidden flex items-center justify-center p-4 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${isDark ? 'tokyonight' : 'default'}&hide_border=true&background=00000000&stroke=6366f1&ring=6366f1&fire=8b5cf6&currStreakLabel=6366f1`}
                  alt="GitHub Streak"
                  className="w-full max-w-md"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Profile Link */}
            <div className="text-center mt-10">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiGithub size={18} />
                View Full GitHub Profile
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHub;
