import React from "react";

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-[#050816] px-6 py-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="relative max-w-5xl w-full">
        
        {/* Glass Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white hover:scale-[1.02] transition duration-500">
          
          {/* Badge */}
          <p className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-[0.2em] uppercase bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-400/20 mb-6">
            🚀 Skills
          </p>

          {/* Heading */}
          <h3 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>

          {/* Description */}
          <p className="text-lg leading-9 text-gray-400 max-w-3xl mb-10">
            I enjoy working with modern technologies and continuously improving
            my development skills to create responsive, user-friendly, and
            visually engaging applications.
          </p>

          {/* Skills Container */}
          <div className="flex flex-wrap gap-5">
            
            {["React", "Java", "HTML5", "CSS3", "C", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-lg font-semibold text-gray-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-black hover:scale-105 transition duration-300 cursor-pointer shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            
            <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300">
              Explore Skills
            </button>

            <button className="px-7 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 font-semibold transition duration-300">
              View Projects
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;