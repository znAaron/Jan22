import cake from './cake.png';
import './App.css';
import confetti from 'canvas-confetti';

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
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
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

setOffFirework();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cake} className="Cake"/>
        <p>
          Happy 21st Birthday!
        </p>
        <button onClick={setOffFirework}>
          More Firework!
        </button>
      </header>
    </div>
  );
}

export default App;
