import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider"; // આ ઉમેર્યું

function Contact() {
  const { authUser } = useAuth(); // આ લાઈન ઉમેરી જેથી એરર ના આવે
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Contact <span className="text-pink-500">Us</span></h1>
        <div className="mt-12 flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md border p-8 rounded-xl shadow-lg">
            <div>
              <label className="block mb-1">Full Name</label>
              <input type="text" placeholder="Enter name" className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800" {...register("name", { required: true })} />
            </div>
            <div className="mt-4">
              <label className="block mb-1">Email</label>
              <input type="email" placeholder="Email address" className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800" {...register("email", { required: true })} />
            </div>
            <div className="mt-4">
              <label className="block mb-1">Message</label>
              <textarea placeholder="Message" className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 h-32" {...register("message", { required: true })}></textarea>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded-md mt-6 hover:bg-pink-700">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;