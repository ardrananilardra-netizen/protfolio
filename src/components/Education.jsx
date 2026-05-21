import React from "react";

function Education() {
  return (
    <section id="education"className="min-h-screen flex items-center justify-center bg-[#050816] px-6 py-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="relative max-w-5xl w-full">
        
        {/* Glass Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white hover:scale-[1.02] transition duration-500">
          
          {/* Badge */}
          <p className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-[0.2em] uppercase bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-400/20 mb-6">
            🎓 Education
          </p>

          {/* Heading */}
          <h3 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h3>

          {/* Education Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300">
            
            <h4 className="text-3xl font-bold text-white mb-3">
              Diploma in Computer Engineering
            </h4>

            <span className="inline-block px-4 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full mb-4">
              2024 — 2027
            </span>

            <p className="text-lg text-gray-400 leading-8">
              Govt Women’s Polytechnic College, Kerala
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            
            <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300">
              View Details
            </button>

            <button className="px-7 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 font-semibold transition duration-300">
              Contact Me
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;