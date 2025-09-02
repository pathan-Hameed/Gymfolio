import profile1 from "../assets/profile1.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-[30px] md:my-20 text-left md:text-center nunito">
      {/* Text Section */}
      <div className="max-w-2xl relative z-10 md:flex md:flex-col md:items-center mb-[30px] md:mb-0">
        <h1 className="text-4xl md:text-8xl text-black text-center">
          Level Up Your Fitness
        </h1>
        <p className="mt-[20px] md:mt-[50px] text-gray-700 text-md md:text-xl md:w-3/4">
          Achieve your health goals with personalized training plans, real
          results, and expert guidance
        </p>
        <button
          className="mt-[20px] md:mt-[50px] px-4 py-2 text-sm md:px-8 md:py-3 bg-green-600 text-white font-semibold md:text-lg rounded-full shadow-lg 
                 hover:bg-green-700 active:scale-95 transition-all duration-300"
        >
          Book a Session
        </button>
      </div>

      {/* Mobile layout (stacked images) */} {/* Mobile layout (stacked images) */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {/* Left image - spans 2 rows */}
        <div className="col-span-1 row-span-2 ">
          <img
            src={profile1}
            lt="Left"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Top-right image */}
        <div>
          <img
            src={profile3}
            alt="Top Right"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Bottom-right image */}
        <div>
          <img
            src={profile4}
            alt="Bottom Right"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Desktop scattered images */} {/* Desktop scattered images */}
      <div className="hidden md:block z-0">
        {/* image1  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Start slightly lower
          animate={{ y: 0, opacity: 1 }} // Move to original position
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-[100px] w-50 rounded-2xl shadow-xl transform -translate-y-1/2"
        >
          <img src={profile1} alt="Workout" className="rounded-2xl" />{" "}
        </motion.div>

        {/* image 2  */}
        <motion.div
          initial={{ x: 30, opacity: 0 }} // Start from right
          animate={{ x: 0, opacity: 1 }} // Slide into position
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute top-10 right-20 w-45 rounded-2xl shadow-xl"
        >
          <img src={profile3} alt="Lifting" className=" rounded-2xl" />
        </motion.div>

        {/* image 3  */}
        <motion.div
          initial={{ x: 20, opacity: 0 }} // Start from right
          animate={{ x: 0, opacity: 1 }} // Slide into position
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-10 right-40 w-45 rounded-2xl shadow-xl"
        >
          <img src={profile4} alt="Strength" className="rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
