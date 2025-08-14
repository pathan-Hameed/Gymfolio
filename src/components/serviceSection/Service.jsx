import React from "react";
import "./service.css";
import planImg from "../../assets/desktop/planImage.jpg";

export default function Service() {
  return (
    <div className="serviceSection">
      <h1>What We Offer</h1>

      <div className="service-content">
        <div className="serviceList">
          <ul className="listItems">
            <a href="#">
              <li>Personalized Plan</li>
            </a>
            <a href="#">
              <li>1-on-1 Coaching</li>
            </a>
            <a href="#">
              <li>Nutrition Guidance</li>
            </a>
            <a href="#">
              <li>Progress Tracking</li>
            </a>
          </ul>
          <div>
            <button className="btn">Book Session</button>
          </div>
        </div>

        <div className="imageNcontent">
          <img src={planImg} alt="plan image" />
          <h2>Personalized Plan</h2>
          <p>
            Custom routines designed for your goals — at home or in the gym.
          </p>
        </div>
      </div>
    </div>
  );
}
