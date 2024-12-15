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
import Day9 from "./AdventCalendar/Day9";
import Day10 from "./AdventCalendar/Day10";
import Day11 from "./AdventCalendar/Day11";
import Day12 from "./AdventCalendar/Day12";
import Day13 from "./AdventCalendar/Day13";
import Day14 from "./AdventCalendar/Day14";
import Day15 from "./AdventCalendar/Day15";
import Day16 from "./AdventCalendar/Day16";
import Day17 from "./AdventCalendar/Day17";
import Day18 from "./AdventCalendar/Day18";
import Day19 from "./AdventCalendar/Day19";
import Day20 from "./AdventCalendar/Day20";
import Day21 from "./AdventCalendar/Day21";
import Day22 from "./AdventCalendar/Day22";
import Day23 from "./AdventCalendar/Day23";
import Day24 from "./AdventCalendar/Day24";
import Day25 from "./AdventCalendar/Day25";

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
        <Route path="Day9" element={<Day9 />} />
        <Route path="Day10" element={<Day10 />} />
        <Route path="Day11" element={<Day11 />} />
        <Route path="Day12" element={<Day12 />} />
        <Route path="Day13" element={<Day13 />} />
        <Route path="Day14" element={<Day14 />} />
        <Route path="Day15" element={<Day15 />} />
        <Route path="Day16" element={<Day16 />} />
        <Route path="Day17" element={<Day17 />} />
        <Route path="Day18" element={<Day18 />} />
        <Route path="Day19" element={<Day19 />} />
        <Route path="Day20" element={<Day20 />} />
        <Route path="Day21" element={<Day21 />} />
        <Route path="Day22" element={<Day22 />} />
        <Route path="Day23" element={<Day23 />} />
        <Route path="Day24" element={<Day24 />} />
        <Route path="Day25" element={<Day25 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);