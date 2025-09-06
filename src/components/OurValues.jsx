import React from "react";
import value1 from "../assets/valuepic1.png"; // replace with real images
import value2 from "../assets/valuepic2.png";
import value3 from "../assets/value3.png";
import value4 from "../assets/valuepic9.png";

export default function OurValues() {
  const values = [
    {
      title: "Discipline is the Foundation",
      description:
        "We believe true strength begins with discipline. Every rep, every meal, every rest counts. Consistency in small steps builds life-changing results.",
      img: value1,
      reverse: false,
    },
    {
      title: "Strength Through Consistency",
      description:
        "Small actions performed daily create powerful transformations. We believe in the compounding effect of consistency.",
      img: value3,
      reverse: true,
    },
    {
      title: "Growth Beyond Limits",
      description:
        "Challenges are opportunities in disguise. We push boundaries to unlock true potential, physically and mentally.",
      img: value4,
      reverse: false,
    },
    {
      title: "Community and Support",
      description:
        "No journey is taken alone. We grow stronger together by uplifting, motivating, and inspiring one another.",
      img: value2,
      reverse: true,
    },
  ];

  return (
    <section className="bg-white nunito px-6 md:px-[100px] mt-[50px] md:mt-[200px]" id="values">
      {/* Main Heading */}
      <h2 className="text-center font-bold nunito text-3xl md:text-5xl mb-12">
        Our Values
      </h2>

      {/* Value Groups */}
      <div className="flex flex-col gap-12">
        {values.map((val, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              val.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 nunito">
                {val.title}
              </h3>
              <p className="text-sm md:text-xl text-gray-700 nunito">
                {val.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="hidden md:w-1/2 md:flex justify-center">
              <img
                src={val.img}
                alt={val.title}
                className="max-w-[250px] md:max-w-[400px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
