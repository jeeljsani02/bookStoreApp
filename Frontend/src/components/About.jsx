import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10 min-h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            About <span className="text-pink-500">bookStore</span>
          </h1>
          
          <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-10">
            {/* Left Side: Information */}
            <div className="w-full md:w-1/2 text-left space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We believe that books are the ultimate source of knowledge. Our mission is to provide readers with a platform where they can easily discover, explore, and read new books.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Whether you are looking for free courses or engaging new stories, you will find everything you need here at <span className="text-pink-500 font-bold">bookStore</span>.
              </p>
              <Link to="/course">
                <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-300">
                  Explore Courses
                </button>
              </Link>
            </div>

            {/* Right Side: Simple Branding Box or Image */}
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="p-10 border-4 border-pink-500 rounded-full">
                  <span className="text-5xl md:text-7xl font-bold text-pink-500">BK</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;