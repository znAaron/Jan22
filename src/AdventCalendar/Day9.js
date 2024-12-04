import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day9.png";
import Paw from "./paw.png";

function Day9() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "你好呀，我叫Fluffy！好冷好冷，我有预感马上要就要下雪啦。感觉只有下雪天才有圣诞节的感觉呢。这么说来澳大利亚人民真是不幸呢。还有16天就要到圣诞节啦，要是今年下大雪的话我们一起来堆雪人，做雪天使吧！";

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

export default Day9;
