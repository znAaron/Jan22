import React, { useEffect, useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

const birthdate = "2001-01-22 00:00:00 EST";

var count = 200;
var defaults = {
  origin: { y: 0.7 },
};

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

function setOffFirework() {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function calculateDaysUntilBirthday(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  birthDate.setFullYear(today.getFullYear());

  
  const timeDiff = birthDate.getTime() - today.getTime();
  const daysUntilBirthday = Math.ceil(timeDiff / (1000 * 3600 *24));

  return daysUntilBirthday;
}

function App() {
  const age = calculateAge(birthdate);
  const daysUntilBirthday = calculateDaysUntilBirthday(birthdate);

  if (daysUntilBirthday == 0) {
    setOffFirework();
  }

  const [birthdayMessage, setBirthdayMessage] = useState(
    `Happy ${age}st Birthday!`
  );
  const [graphic, setGraphic] = useState(`./cake.png`);
  const [btnMessage, setBtnMessage] = useState(
    `More Firework!`
  );

  useEffect(() => {
    if (daysUntilBirthday !== 0) {
      const countdownMessage = `${daysUntilBirthday} days until the special day!`;
      setBirthdayMessage(countdownMessage);
    }
  }, [daysUntilBirthday]);

  useEffect(() => {
    if (daysUntilBirthday !== 0) {
      setGraphic("./loading.gif");
    }
  }, [daysUntilBirthday]);

  useEffect(() => {
    if (daysUntilBirthday !== 0) {
      setBtnMessage("Can't wait already!");
    }
  }, [daysUntilBirthday]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={graphic} className="Cake" alt="Birthday Cake" />
        <p>{birthdayMessage}</p>
        <button onClick={setOffFirework}>{btnMessage}</button>
      </header>
    </div>
  );
}

export default App;
