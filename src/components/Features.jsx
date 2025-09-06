import React from "react";

export default function Features() {
  const mobileStats = [
    { number: "150+", label: "Followers" },
    { number: "40+", label: "Clients" },
    { number: "25+", label: "Programs" },
  ];

  const desktopStats = [
    { number: "150+", label: "Followers" },
    { number: "40+", label: "Clients" },
    { number: "25+", label: "Programs" },
    { number: "300+", label: "Workouts" },
    { number: "75+", label: "Transformations" },
  ];

  return (
    <section className="w-full">
      <div className="max-w-full mx-auto overflow-x-auto px-[30px] md:px-[100px]">
        {/* Mobile View - Only 3 Stats */}
        <div className="flex items-center justify-between min-w-max md:hidden">
          {mobileStats.map((item, index) => (
            <div
              key={index}
              className="text-center flex-shrink-0"
            >
              <h2 className="text-2xl font-semibold text-black">{item.number}</h2>
              <p className="text-gray-700 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop View - All Stats */}
        <div className="hidden md:flex items-center justify-between gap-8 min-w-max">
          {desktopStats.map((item, index) => (
            <div
              key={index}
              className="text-center flex-shrink-0"
            >
              <h2 className="text-4xl font-semibold text-black">{item.number}</h2>
              <p className="text-gray-700 text-xl">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
