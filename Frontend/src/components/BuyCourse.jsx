import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BuyCourse() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const user = JSON.parse(localStorage.getItem("Users"));

  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    if (user && item) {
      const purchasedCourses = JSON.parse(localStorage.getItem(`purchased_${user._id}`)) || [];
      if (purchasedCourses.includes(item.id)) {
        setPurchased(true);
      }
    }
  }, [item, user]);

  const handlePurchase = () => {
    if (user && item) {
      const key = `purchased_${user._id}`;
      let purchasedCourses = JSON.parse(localStorage.getItem(key)) || [];
      if (!purchasedCourses.includes(item.id)) {
        purchasedCourses.push(item.id);
        localStorage.setItem(key, JSON.stringify(purchasedCourses));
      }
      setPurchased(true);
    }
  };

  if (!item) return <div className="text-center mt-10">No course selected!</div>;

  return (
    <div className="flex justify-center items-center h-screen dark:bg-slate-900 dark:text-white">
      <div className="border p-10 rounded-lg shadow-lg text-center bg-white dark:bg-slate-800">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p className="mt-4 text-xl font-semibold text-pink-500">${item.price}</p>

        <div className="mt-6 flex flex-col gap-3">
          {!purchased ? (
            <div className="flex justify-center gap-4">
              <button onClick={handlePurchase} className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700">
                Buy Now
              </button>
              <button onClick={() => navigate("/course")} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700">
                Cancel
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-default w-full">
                ✅ Purchased Successfully!
              </button>
              <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyCourse;