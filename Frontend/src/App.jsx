import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact"; 
import About from "./components/About";    
import BuyCourse from "./components/BuyCourse"; // 1. Aa import check karjo (path tamara folder mujab)
import { useAuth } from "./context/AuthProvider";

function App() {
  const { authUser } = useAuth(); 

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Course list page */}
        <Route 
          path="/course" 
          element={authUser ? <Courses /> : <Navigate to="/signup" />} 
        />
        
        {/* 2. AA LINE SUDHARELI CHE: BuyCourse component ahiya hovu joie */}
        <Route 
          path="/buycourse" 
          element={authUser ? <BuyCourse /> : <Navigate to="/signup" />} 
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;