import React from "react";

function About() {
  return (
    <section id="about"className="min-h-screen flex items-center justify-center bg-[#050816] px-6 py-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="relative max-w-5xl w-full">
        
        {/* Glass Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white hover:scale-[1.02] transition duration-500">
          
          {/* Badge */}
          <p className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold tracking-[0.2em] uppercase bg-purple-500/10 text-purple-300 rounded-full border border-purple-400/20 mb-6">
            ✨ About Me
          </p>

          {/* Heading */}
          <h3 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Creating{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Modern Experiences
            </span>
          </h3>

          {/* Description */}
          <p className="text-lg leading-9 text-gray-400 max-w-3xl">
            I enjoy transforming ideas into visually engaging and responsive
            applications. My interests include frontend development, UI/UX
            design, and modern web technologies. I love building elegant user
            interfaces with smooth interactions and creative visual design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            
            <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300">
              Explore More
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

export default About;