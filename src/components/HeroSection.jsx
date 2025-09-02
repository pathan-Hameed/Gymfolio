import profile1 from "../assets/profile1.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-[30px] md:my-20 text-left md:text-center nunito">
      {/* Text Section */}
      <div className="max-w-2xl relative z-10 md:flex md:flex-col md:items-center">
        <h1 className="text-4xl md:text-8xl text-black text-center">
          Level Up Your Fitness
        </h1>
        <p className="mt-[20px] md:mt-[50px] text-gray-700 text-md md:text-xl mb-[50px] md:mb-0 md:w-3/4">
          Achieve your health goals with personalized training plans, real results, and expert guidance
        </p>
      </div>

      {/* Mobile layout (stacked images) */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {/* Left image - spans 2 rows */}
        <div className="col-span-1 row-span-2">
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

      {/* Desktop scattered images */}
      <div className="hidden md:block z-0">
        <img
          src={profile1}
          alt="Workout"
          className="absolute top-1/2 left-[100px] w-50 rounded-2xl shadow-xl transform -translate-y-1/2"
        />
        <img
          src={profile3}
          alt="Lifting"
          className="absolute top-10 right-20 w-45 rounded-2xl shadow-xl"
        />
        <img
          src={profile4}
          alt="Strength"
          className="absolute bottom-10 right-40 w-45 rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
