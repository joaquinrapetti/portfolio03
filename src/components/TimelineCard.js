import React from "react";
import "./TimelineCard.css";

const TimelineCard = ({ title, text, year }) => {
  return (
    <div className="road-card">
      <div className="road-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="road-year">
        <h3>{year}</h3>
      </div>
    </div>
  );
};

export default TimelineCard;
