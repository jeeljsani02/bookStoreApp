import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    alert("Signup Successful!");
    // Redirect to home page after registration
    navigate("/"); 
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box dark:bg-slate-900 dark:text-white border shadow-md p-5 relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            
            <div className="mt-4 space-y-2">
              <span>Name</span><br />
              <input type="text" placeholder="Enter fullname" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" {...register("name", { required: true })} />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input type="email" placeholder="Enter email" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" {...register("email", { required: true })} />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input type="password" placeholder="Enter password" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800" {...register("password", { required: true })} />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-md">Have account?{" "}
                {/* Button to open Login Modal */}
                <button 
                  type="button"
                  className="underline text-blue-500 cursor-pointer" 
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >Login</button>
              </p>
            </div>
          </form>
          {/* Modal included here so it can be opened from the Signup page */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;