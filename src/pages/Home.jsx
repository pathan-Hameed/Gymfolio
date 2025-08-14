import React from "react";
import "./Home.css";
import Numbers from "../components/numbers/Numbers";
import About from "../components/about/About";
import Service from "../components/serviceSection/Service";

export default function Home() {
  return (
    <>
      <div className="homePage">
        <div className="content">
          <h1 className="heading">Level Up Your Fitness Game</h1>
          <p>
            Achieve your health goals with personalized training plans, real
            results, and expert guidance
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
      <Numbers
        num1="2000+"
        title1="Happy Clients"
        num2="800+"
        title2="Sessions Completed"
        num3="15+"
        title3="Years of Experience"
        num4="10"
        title4="Expert Trainers"
      />
      <About />
      <div className="service-section">
      <Service />
      </div>
    </>
  );
}
