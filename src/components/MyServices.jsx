import React from 'react';

const MyServices = () => {
  const services = [
    {
      heading: '1. Personalized Coaching',
      points: [
        'Custom Workout Plans (home/gym based)',
        'One-on-One Virtual Training (via Zoom/Google Meet)',
        'In-Person Sessions (for local clients)',
        'Form Correction & Technique Guidance',
      ],
    },
    {
      heading: '2. Nutrition & Meal Guidance',
      points: [
        'Tailored meal plans for fitness goals (fat loss, muscle gain, maintenance)',
        'Macro & calorie tracking guidance',
        'Supplement recommendations',
      ],
    },
    {
      heading: '3. Online Fitness Programs',
      points: [
        '8-week / 12-week transformation challenges',
        'Pre-recorded workout videos',
        'Mobile fitness apps with structured plans',
        'Subscription-based access to exclusive training content',
      ],
    },
    {
      heading: '4. Community & Motivation',
      points: [
        'Private Facebook/WhatsApp/Discord groups for accountability',
        'Daily/weekly motivation & check-ins',
        'Group challenges & fitness competitions',
      ],
    },
  ];

  return (
    <div className="bg-white p-4 pt-[100px] md:pt-[100px] px-8 sm:px-8 md:px-[100px] flex flex-col items-start" id="services">
      <h1 className="self-center font-bold text-3xl md:text-5xl lg:text-5xl nunito text-black mb-8 sm:mb-12">
        My Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 md:pt-12 mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg shadow-lg p-6 sm:p-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold nunito mb-4 text-center sm:text-center">
              {service.heading}
            </h2>
            <ul className="space-y-2 mt-8">
              {service.points.map((point, i) => (
                <li key={i} className="text-gray-300 text-sm md:text-base nunito">
                  &bull; {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
          className="w-full md:w-2/3 mt-[20px] md:mt-[50px] px-4 py-2 text-sm md:px-8 md:py-3 bg-green-600 text-white font-semibold md:text-lg rounded-full shadow-lg 
                 hover:bg-green-700 active:scale-95 transition-all duration-300 self-center"
        >
          Book a Session
        </button>
    </div>
  );
};

export default MyServices;