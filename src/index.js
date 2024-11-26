import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './AdventCalendar/days.css';
import './index.css';

import BirthDay from "./BirthDay";
import Day1 from "./AdventCalendar/Day1";
import Day2 from "./AdventCalendar/Day2";
import Day3 from "./AdventCalendar/Day3";
import Day4 from "./AdventCalendar/Day4";
import Day5 from "./AdventCalendar/Day5";
import Day6 from "./AdventCalendar/Day6";
import Day7 from "./AdventCalendar/Day7";
import Day8 from "./AdventCalendar/Day8";
import TooEarly from "./AdventCalendar/TooEarly";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BirthDay />} />
        <Route path="Day1" element={<Day1 />} />
        <Route path="Day2" element={<Day2 />} />
        <Route path="Day3" element={<Day3 />} />
        <Route path="Day4" element={<Day4 />} />
        <Route path="Day5" element={<Day5 />} />
        <Route path="Day6" element={<Day6 />} />
        <Route path="Day7" element={<Day7 />} />
        <Route path="Day8" element={<Day8 />} />
        <Route path="*" element={<TooEarly />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);