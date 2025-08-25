import React from "react";
import fitness1 from "../assets/fitness1.jpg"; // adjust path if needed

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fitness1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative ml-[30px] mr-[30px] z-10 text-white px-4">
        <h1
          className="
            text-8xl md:text-7xl   /* bigger on mobile, same on desktop */
            text-left md:text-center
            font-normal leading-tight mb-6
          "
        >
          Level Up Your Fitness <br /> Game
        </h1>

        <p
          className="
            text-2xl md:text-xl     /* bigger font on mobile */
            text-left md:text-center
            font-light mb-8
          "
        >
          Achieve your health goals with personalized training plans, real
          results, and expert guidance
        </p>

        <div className="text-left md:text-center">
          <button className="px-10 py-4 border border-white text-white text-xl font-medium rounded hover:bg-white hover:text-black transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
