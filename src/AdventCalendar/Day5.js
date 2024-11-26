import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day5.png";
import Paw from "./paw.png";

function Day5() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "哇，你好！我是博美小蒲，很高兴认识你！这是你今天的礼物🎁，我最喜欢在圣诞节帮忙送礼物了，因为感觉送礼物的人和收到的人都会很开心呢。总而言之圣诞节快乐，20天以后我们还会再见的www";

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

export default Day5;
