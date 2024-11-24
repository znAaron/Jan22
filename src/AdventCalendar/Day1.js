import React, { useState } from "react";

import "./days.css";
import Puppy from "./Puppy_day1.png";
import Paw from "./paw.png";

function Day1() {
  // State to control the visibility of the 'puppy-toast'
  const [isToastVisible, setToastVisible] = useState(false);

  // Function to toggle the visibility of the 'puppy-toast'
  const PuppyTalk = () => {
    setToastVisible(true); // Show the toast when the button is clicked
  };

  return (
    <div className="AdventCalendar">
      <body>
        <div class={`bubble medium bottom puppy-toast ${isToastVisible ? "visible" : "hidden"}`}>
          今天的礼物是由马尔济斯犬带来的,小济说希望你能喜欢www
          <br/>从今天开始我们一起开始倒计时吧,现在离圣诞还有25天!
        </div>
        <img src={Puppy} className="Puppy" />
        <button className="puppy-btn">
          <img src={Paw} onClick={PuppyTalk} className="Paw" alt="Puppy Paw" />
        </button>
      </body>
    </div>
  );
}

export default Day1;
