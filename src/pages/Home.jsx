import React from "react";
import LandingPage from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="bg-[#2E2E2E]">

      <HeroSection />

      <div className="px-[30px] py-[50px] text-white md:px-[100px]">
        <ul className="space-y-4 flex justify-between">
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">15+</span>
            <span className="text-sm font-medium">transformations</span>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">45+</span>
            <span className="text-sm font-medium">success stories</span>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">99+</span>
            <span className="text-sm font-medium">trusted Clients</span>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold">115+</span>
            <span className="text-sm font-medium">Followers</span>
          </li>
        </ul>
      </div>

      <AboutSection />
    </div>
  );
}
