import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day12.png";
import Paw from "./paw.png";

function Day12() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "你好，我是伯恩山索洛！今天是周六！听说大家都很喜欢周五呢，但我最喜欢的日子其实是周六。因为主人会带我出门玩好久好久。对啦，这是周六的礼物。还有13天就要圣诞节啦！";

  // Function to add letters one by one
  const typeText = () => {
    let index = -1;

    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + fullText[index]);
      index++;

      if (index >= fullText.length -1) {
        clearInterval(interval); // Stop the interval when done
      }
    }, 80); // Adjust the delay for typing speed
  };

  // Function to show the toast and start the typing effect
  const PuppyTalk = () => {
    setToastVisible(true);
    setDisplayText(""); // Reset the text before starting
    typeText(); // Start typing effect
  };

  return (
    <div className="AdventCalendar">
      <body>
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

export default Day12;
