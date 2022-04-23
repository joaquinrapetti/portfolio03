import React from "react";
import "./Roadmap.css";
import TimelineCard from "./TimelineCard";

const Roadmap = () => {
  return (
    <div className="road-container">
      <div className="road-intro">
        <h1>My Expirience Roadmap</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
      <div className="road-timeline">
        <TimelineCard
          title="Step 01"
          text="Aca va el texto que habla de las tarjetas. Aca va el texto que habla
          de las tarjetas. step 01 02 03"
          year="2021"
        />
        <TimelineCard
          title="Step 02"
          text="Aca va el texto que habla de las tarjetas. Aca va el texto que habla
          de las tarjetas. step 01 02 03"
          year="2021"
        />
        <TimelineCard
          title="Step 03"
          text="Aca va el texto que habla de las tarjetas. Aca va el texto que habla
          de las tarjetas. step 01 02 03"
          year="2022"
        />
      </div>
    </div>
  );
};

export default Roadmap;
