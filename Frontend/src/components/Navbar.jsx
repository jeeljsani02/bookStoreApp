import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const [authUser] = useAuth(); // Get user data from Auth context
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // Navbar Items with correct routes
  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 dark:bg-slate-800 dark:text-white transition-all duration-300">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-2xl font-bold cursor-pointer">bookStore</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end space-x-3">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 border rounded-md dark:bg-slate-900 dark:border-slate-700 outline-none text-black dark:text-white"
            />
          </div>

          <div 
            className="cursor-pointer p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all duration-200"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon size={22} />
            ) : (
              <Sun size={22} className="text-yellow-400" />
            )}
          </div>

          {/* Conditional Rendering: Show Logout if user is logged in, else show Login */}
          {authUser ? (
            <Logout />
          ) : (
            <div className="">
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;