import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './AdventCalendar/days.css';
import './index.css';

import BirthDay from "./BirthDay";
import Day1 from "./AdventCalendar/Day1";
import Day2 from "./AdventCalendar/Day2";
import TooEarly from "./AdventCalendar/TooEarly";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BirthDay />} />
        <Route path="Day1" element={<Day1 />} />
        <Route path="Day2" element={<Day2 />} />
        <Route path="*" element={<TooEarly />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);