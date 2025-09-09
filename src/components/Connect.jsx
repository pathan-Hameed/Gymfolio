import React from "react";

export default function Connect() {
  return (
    <>
      {/*contact section  */}
      <div
        className="bg-gradient-to-br from-[#F16E32] via-[#D5373A] to-[#CE323A] text-white font-inter"
      >
        <section className="min-h-screen flex items-center justify-center p-[30px] md:p-[100px] mt-[50px] md:mt-[100px]" >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 nunito">
              Let's Train Together
            </h1>
            {/* Paragraph visible on desktop, hidden on mobile */}
            <p className="hidden md:block text-base md:text-lg mb-8 nunito">
              Ready to take the next step toward your fitness journey? Reach out
              today!
            </p>

            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 md:px-6 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E94B3C] placeholder-gray-500 text-gray-800 text-sm md:text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 md:px-6 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E94B3C] placeholder-gray-500 text-gray-800 text-sm md:text-lg"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 md:px-6 md:py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E94B3C] placeholder-gray-500 text-gray-800 text-sm md:text-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-4 rounded-xl bg-gradient-to-br from-[#FE5F54] to-[#E94B3C] hover:from-[#E94B3C] hover:to-[#FE5F54] transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
