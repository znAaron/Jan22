import React, { useState } from "react";
import Snowfall from "react-snowfall";

import "./days.css";
import Puppy from "./Puppy_day20.png";
import Paw from "./paw.png";

function Day20() {
  const [isToastVisible, setToastVisible] = useState(false);
  const [displayText, setDisplayText] = useState(""); // Text being displayed dynamically

  const fullText =
    "嗨，我是比格犬栗子。离圣诞节只有不到5天啦，到处都有好多好闪亮的圣诞树。如果由我来装饰圣诞树的话，我一定会在树上挂好多好多糖果和饼干。这样过了圣诞节就不需要把它们拿下来，只需要吃掉就好啦！";

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
