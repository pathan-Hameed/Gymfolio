import React from "react";
import "./Numbers.css";

export default function Numbers({ num1, title1, num2, title2, num3, title3, num4, title4 }) {
  return (
    <div className="number-section">
      <ul className="numList">
        <li>
          <span className="number">{num1}</span>
          <p>{title1}</p>
        </li>
        <li>
          <span className="number">{num2}</span>
          <p>{title2}</p>
        </li>
        <li>
          <span className="number">{num3}</span>
          <p>{title3}</p>
        </li>
        <li>
          <span className="number">{num4}</span>
          <p>{title4}</p>
        </li>
      </ul>
    </div>
  );
}

// Default Props for the Numbers component
Numbers.defaultProps = {
  num1: "1000+",
  title1: "Happy Clients",
  num2: "500+",
  title2: "Sessions Completed",
  num3: "10+",
  title3: "Years of Experience",
  num4: "5",
  title4: "Expert Trainers"
};


