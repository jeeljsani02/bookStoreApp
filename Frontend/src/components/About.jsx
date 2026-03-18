import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { authUser } = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          About <span className="text-pink-500">bookStore</span>
        </h1>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-pink-500">Our Mission</h2>
              <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                Books are the ultimate source of knowledge and a gateway to new worlds. Our mission is to make high-quality 
                literature and educational resources accessible to everyone, fostering a community of lifelong learners 
                and book enthusiasts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-pink-500">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-2">
                <li>Wide range of genres from Fiction to Technical courses.</li>
                <li>Easy access to free and premium content.</li>
                <li>User-friendly interface with Dark Mode support.</li>
                <li>Seamless reading experience on any device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-pink-500">Our Vision</h2>
              <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                We believe that everyone should have the opportunity to read and grow. We aim to become the world's 
                most loved digital library where knowledge knows no bounds.
              </p>
            </section>

            <div className="pt-4">
              <Link to="/course">
                <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition duration-300 shadow-lg">
                  Explore Our Collection
                </button>
              </Link>
            </div>
          </div>

          {/* Image/Logo Section (Clean Version) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="p-16 border-8 border-pink-500 rounded-full text-7xl font-bold text-pink-500">
              BK
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;