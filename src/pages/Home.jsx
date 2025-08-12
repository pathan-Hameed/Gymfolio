import React from "react";
import "./Home.css";
import Numbers from "../components/numbers/Numbers";
import About from "../components/about/About";

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
      <Numbers />
      {/* <About /> */}
    </>
  );
}
