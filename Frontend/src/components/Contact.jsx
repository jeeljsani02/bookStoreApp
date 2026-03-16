import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Contact <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-4 text-gray-500">
            If you have any questions, please feel free to reach out to us using the form below.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md border shadow-lg p-8 rounded-xl dark:bg-slate-900 dark:border-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>

              <div>
                <label className="block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700 h-32"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;