import React, { useState } from "react";
import Snowfall from "react-snowfall";

import "./days.css";
import Puppy from "./Puppy_day20.png";
import Paw from "./paw.png";

function Day20() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "5";

  const [isTyping, setIsTyping] = useState(false);

    const typeText = () => {
      if (isTyping) return; // Prevent multiple intervals if already typing
  
      setIsTyping(true); // Set isTyping to true to block new invocations
  
      let index = -1;
  
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + fullText[index]);
        index++;
  
        if (index >= fullText.length - 1) {
          clearInterval(interval);
          setIsTyping(false); // Reset isTyping after completion
        }
      }, 80);
    }

  // Function to show the toast and start the typing effect
  const PuppyTalk = () => {
    if (isToastVisible) return; // Prevent multiple toasts if already visible

    setToastVisible(true);
    setDisplayText("");
    typeText();
  };

  return (
    <div className="AdventCalendar">
      <body>
        <Snowfall speed={[0.1, 1.0]}/>
        <div
          className={`bubble medium bottom puppy-toast ${
            isToastVisible ? "visible" : "hidden"
          }`}
        >
          <div className="toast-test">{displayText}</div>
        </div>
        <img src={Puppy} className="Puppy" />
        <button className="puppy-btn">
          <img src={Paw} onClick={PuppyTalk} className="Paw" alt="Puppy Paw" />
        </button>
      </body>
    </div>
  );
}

export default Day20;
