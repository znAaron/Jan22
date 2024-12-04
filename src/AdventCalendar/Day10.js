import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day10.png";
import Paw from "./paw.png";

function Day10() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "这是一只路过的松狮犬，她叫佩佩。佩佩听说你最喜欢和狗狗们一起玩了，佩佩也想来玩。佩佩还听说你家有她最喜欢的eggnog可以喝，所以还带来了礼物来交换！佩佩真的超级期待15天以后的圣诞节！";

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

export default Day10;
