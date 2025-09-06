import React from "react";
import coachImg from "../assets/profile5.jpg"; // replace with your image path
import Features from "./Features";

export default function CoachCard() {
  return (
    <>
      <div className="flex flex-col md:flex-col px-[30px] md:px-[100px] mt- md:mt-24 mb-12 md:mb-24" id="about">
        {/* sub heading  */}
        <h1 className="text-center text-3xl md:text-5xl nunito font-semibold mb-12 md:mb-24">
          Meet Your Trainer
        </h1>
        {/* desktop code */}
        <div className="hidden md:flex md:items-start md:justify-between">
          <div className="flex flex-col items-center w-4/10">
            <h2 className="text-4xl nunito text-center text-gray-900 mb-2 p-0 m-0">Farzan Khan</h2>
            <div className="bg-gray-800 h-1 w-3/8 mb-12 self-center"></div>
            <p className=" text-gray-600 text-xl nunito text-left leading-relaxed p-0 m-0">
              I’m a dedicated gym coach, focused on delivering personalized
              training that helps clients achieve their desired results and
              build la sting confidence.
            </p>
          </div>
          {/* desktop profile  */}
          <div className="relative">
            <img
              src={coachImg}
              alt="Coach"
              className="w-50% h-80 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={coachImg}
            alt="Coach"
            className="w-full h-80 object-cover rounded-lg mb-8 md:mb-0 md:hidden"
          />
        </div>

        {/* mobile text content  */}
        <div className="text-center mt-4  md:hidden flex flex-col items-center">
          <h2 className="text-2xl nunito font-bold text-gray-900 mb-2">
            Farzan Khan
          </h2>
          <div className="bg-gray-700 h-0.5 w-6/8 mb-5"></div>
          <p className="w-9/10 text-gray-600 text-sm text-center leading-relaxed nunito">
            I’m a dedicated gym coach, focused on delivering personalized
            training that helps clients achieve their desired results and build
            lasting confidence.
          </p>
        </div>
      </div>
      <Features />
    </>
  );
}
