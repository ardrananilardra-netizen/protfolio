import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#050816] overflow-hidden px-6"
    >
     {/* Background Image */}
<div className="absolute inset-0">
  <img
    src="/Image/home-bg.png"
    alt="background"
    className="w-full h-full object-cover opacity-80"
  />
</div>

      {/* Animated Background Glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">

        {/* Badge */}
        <p className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-[0.2em] uppercase bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-400/20 mb-6">
          ✨ Hello There
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
          I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ardra N Anil
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Computer Engineering Student
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 max-w-2xl mx-auto">
          Passionate about building modern, responsive, and interactive
          digital experiences using frontend technologies, creative UI/UX,
          and clean development practices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300">
            Hire Me
          </button>

          <button className="px-8 py-3 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 font-semibold transition duration-300">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;