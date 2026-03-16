import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Creating manual user data for testing as there is no backend yet
    const userInfo = {
      _id: "123", // Test ID
      email: data.email,
      fullname: "User",
    };

    // Set data in Auth Context
    setAuthUser(userInfo);
    // Save to LocalStorage
    localStorage.setItem("Users", JSON.stringify(userInfo));

    toast.success("Login Successful!");
    
    // Close the modal
    document.getElementById("my_modal_3").close();
    
    // Refresh page after 1 second to update UI state
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >✕</button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input 
                type="password" 
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            <div className="flex justify-between mt-6">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;