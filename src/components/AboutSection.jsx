import React from "react";
import fitnessProfile2 from "../assets/fitnessProfile2.jpg";
import gymProfileMobile from "../assets/mobile/gymProfileMobile.jpg";

const AboutSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
    >
      {/* Background Image (mobile/desktop switch) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${gymProfileMobile})`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${fitnessProfile2})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-white px-[30px] md:px-16 max-w-3xl">
        <h1 className="text-6xl md:text-6xl font-normal mb-6">Meet Alex</h1>
        <p className="text-2xl mt-[50px] md:text-xl font-light mb-8">
          I'm Alex, a certified fitness coach with 7+ years of experience helping 
          people transform their bodies and build long-term habits. Whether 
          you're just starting or leveling up, I’ll guide you every step of the way.
        </p>

        {/* Stats */}
        <ul className="flex flex-row justify-around md:flex-row md:space-x-12 space-y-4 md:space-y-0 mb-8">
          <li className="flex flex-col items-center">
            <span className="text-3xl font-bold">50+</span>
            <span className="text-sm font-light md:font-medium py-0.5">Transformation</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-3xl font-bold">50+</span>
            <span className="text-sm font-light md:font-medium py-0.5">Success Stories</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-3xl font-bold">50+</span>
            <span className="text-sm font-light md:font-medium py-0.5">Trusted Clients</span>
          </li>
        </ul>

        {/* Button */}
        <button className="px-10 py-4 mt-5 border border-white text-white text-xl font-medium rounded hover:bg-white hover:text-black transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
