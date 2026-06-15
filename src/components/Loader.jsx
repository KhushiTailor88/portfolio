import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-50">
      <div className="text-center">
        {/* Logo/Name animation */}
        <div className="relative mb-8">
          <div className="text-5xl font-black tracking-widest">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              KT
            </span>
          </div>
          {/* Orbiting ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin" />
          </div>
        </div>
        {/* Loading text */}
        <p className="text-slate-400 text-sm font-mono tracking-widest animate-pulse">
          LOADING PORTFOLIO...
        </p>
        {/* Progress bar */}
        <div className="mt-4 w-48 mx-auto h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-[loading_2s_ease-in-out_forwards]" 
               style={{ animation: 'growWidth 2s ease-in-out forwards' }} />
        </div>
      </div>
      <style>{`
        @keyframes growWidth {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
