import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day0.png";

function TooEarly() {
  // State to control the visibility of the 'puppy-toast'
  const [isToastVisible, setToastVisible] = useState(true);

  return (
    <div className="AdventCalendar">
      <body>
        <div class={`bubble medium bottom puppy-toast ${isToastVisible ? "visible" : "hidden"}`}>
          不准提前拆礼物哦!
        </div>
        <img src={Puppy} className="Puppy" />
      </body>
    </div>
  );
}

export default TooEarly;
