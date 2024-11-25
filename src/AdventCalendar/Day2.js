import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day2.png";
import Paw from "./paw.png";

function Day2() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "今天的礼物是由纯真，善良（确信）的摇粒绒带来的。摇粒绒也不知道盒子里是什么，但只知道它很好闻，还有离圣诞节只有24天啦!";

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

export default Day2;
