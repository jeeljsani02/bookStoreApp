import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import BuyCourse from "./components/BuyCourse"; 
import Contact from "./components/Contact"; 
import About from "./components/About";     

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buycourse" element={<BuyCourse />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;