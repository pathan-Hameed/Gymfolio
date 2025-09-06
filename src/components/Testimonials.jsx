import React, { useRef } from "react";
import testimonialVideo from "../assets/testimonial.mp4";
import profilePic from "../assets/profile1.jpg"; // replace with real profile pics

export default function Testimonials() {
  const testimonials = [
    {
      name: "David",
      review: "I loved training with Mark. He is an excellent coach.",
      rating: 4,
      img: profilePic,
    },
    {
      name: "Kevin",
      review: "I loved training with Mark. He is an excellent coach.",
      rating: 4,
      img: profilePic,
    },
    {
      name: "Michael",
      review: "I loved training with Mark. He is an excellent coach.",
      rating: 4,
      img: profilePic,
    },
    {
      name: "Sophia",
      review: "Great energy and motivation throughout the sessions!",
      rating: 3,
      img: profilePic,
    },
    {
      name: "Chris",
      review: "Mark’s training completely changed my fitness journey.",
      rating: 5,
      img: profilePic,
    },
  ];

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section className="w-full bg-white mt-[50px] md:mt-[200px]">
      <h1 className="text-center text-3xl md:text-5xl nunito font-semibold mb-12 md:mb-24">
        What Our Clients Say
      </h1>
      {/* Top Videos Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-5 px-[100px]">
        {[...Array(5)].map((_, i) => {
          const videoRef = useRef(null);
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out w-[150px] hover:w-[250px] h-[350px] origin-left"
              onMouseEnter={() => handleMouseEnter(videoRef)}
              onMouseLeave={() => handleMouseLeave(videoRef)}
            >
              <video
                ref={videoRef}
                src={testimonialVideo}
                muted
                loop
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Testimonials Section - Infinite Scroll */}
      <div className="relative mt-20 bg-gray-900 py-12 px-8 overflow-hidden">
        <div
          className="flex gap-8 w-max"
          style={{
      display: "flex",
      animation: "scrollTicker 40s linear infinite", // adjust 40s for speed
    }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-xl shadow-lg text-center max-w-[400px] h-[200px] flex-shrink-0 flex justify-between"
            >
              <div className="flex flex-col items-center w-4/8">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-2 object-cover"
                />
                <p className="font-semibold nunito">{t.name}</p>
              </div>

              <div className="flex flex-col items-start ml-5">
                {/* Stars */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < t.rating ? "text-yellow-400" : "text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="italic text-sm mb-4 text-left">“ {t.review} ”</p>
              </div>
            </div>
          ))}
        </div>
        {/* Inline Keyframes */}
  <style>
    {`
      @keyframes scrollTicker {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
      </div>
    </section>
  );
}
