import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  // આ લાઈન ખાસ ચેક કરજો, { } હોવું જોઈએ
  const { authUser, searchQuery, setSearchQuery } = useAuth(); 
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 dark:bg-slate-800 dark:text-white transition-all duration-300 shadow-md">
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold cursor-pointer">bookStore</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search books..."
              className="px-3 py-2 border rounded-md dark:bg-slate-900 outline-none text-black dark:text-white w-48 lg:w-64"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} className="text-yellow-400" />}
          </div>
          {authUser ? <Logout /> : (
            <div>
              <a className="bg-black text-white px-3 py-2 rounded-md cursor-pointer hover:bg-slate-800" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;