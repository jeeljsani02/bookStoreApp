import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  // CORRECTED: Destructure as an object
  const { setAuthUser } = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      
      toast.success("Logged out successfully");

      setTimeout(() => {
        window.location.reload(); 
      }, 500);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700 duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;