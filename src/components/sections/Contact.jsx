import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheckCircle, FiCalendar, FiBriefcase } from 'react-icons/fi';

const SOCIAL_LINKS = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'khushitailor138@gmail.com',
    href: 'mailto:khushitailor138@gmail.com',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/khushi-tailor-ab6b9a2ba/',
    href: 'https://www.linkedin.com/in/khushi-tailor-ab6b9a2ba/',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/KhushiTailor88',
    href: 'https://github.com/KhushiTailor88',
    color: 'from-slate-500 to-slate-700',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
    color: 'from-green-500 to-emerald-500',
  },
];

const Contact = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1500));
    setStatus({ loading: false, success: true, error: '' });
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(s => ({ ...s, success: false })), 4000);
  };

  return (
    <section id="contact" className={`py-24 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-indigo-50 to-purple-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-mono text-sm tracking-widest mb-2">{'// get_in_touch'}</p>
          <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Let's Build Something <span className="gradient-text">Amazing Together 🚀</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            I am actively seeking Full Stack Developer and Software Engineer opportunities. Whether you have a job opening, freelance project, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect with Me</h3>
            <div className="space-y-4 mb-8">
              {SOCIAL_LINKS.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-[1.02] group ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs uppercase tracking-wider mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`text-sm font-medium truncate block transition-colors ${
                          isDark ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-700 hover:text-indigo-600'
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a href="mailto:khushitailor138@gmail.com" className="btn-primary flex items-center gap-2">
                <FiBriefcase size={18} /> Hire Me
              </a>
              <a href="/resume.pdf" download className="btn-secondary flex items-center gap-2">
                <FiCheckCircle size={18} /> Resume
              </a>
              <a href="https://calendly.com/khushitailor" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2`}>
                <FiCalendar size={18} /> Schedule a Call
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`p-8 rounded-2xl border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-lg'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Freelance / Say Hi"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {status.success && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <div className="w-4 h-4 spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
