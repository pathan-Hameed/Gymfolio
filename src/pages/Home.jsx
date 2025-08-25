import React from "react";
import LandingPage from "../components/HeroSection";

export default function Home() {
  return (
    <div className="bg-[#2E2E2E]">
      <LandingPage />
      <div className="px-[30px] py-[50px] text-white">
        <ul className="px-[30px] space-y-4 flex justify-between">
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">15+</span>
            <span className="text-sm font-light">transformations</span>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">45+</span>
            <span className="text-sm font-light">success stories</span>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold ">99+</span>
            <span className="text-sm font-light">trusted Clients</span>
          </li>
          <li className="flex flex-col items-center text-center">
  <span className="text-3xl font-bold">115+</span>
  <span className="text-sm font-light">Followers</span>
</li>

        </ul>
      </div>
    </div>
  );
}
