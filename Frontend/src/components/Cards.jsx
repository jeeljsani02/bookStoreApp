import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();
  const location = useLocation(); // Checks the current page path
  
  const user = JSON.parse(localStorage.getItem("Users"));
  
  // Check purchased data for the specific user
  const purchasedCourses = user ? JSON.parse(localStorage.getItem(`purchased_${user._id}`)) || [] : [];
  const isPurchased = purchasedCourses.includes(item.id);

  const handleBuy = () => {
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/buycourse", { state: { item } });
    }
  };

  // Logic: Show "Purchased" status only on the Course page ("/course"), not on Home
  const showPurchased = location.pathname === "/course" && isPurchased;

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="book" className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-outline">${item.price}</div>

            {/* Display "Purchased" badge if bought, else show "Buy Now" button */}
            {showPurchased ? (
              <span className="px-3 py-1 rounded-full border-[2px] border-green-500 text-green-500 font-semibold">
                Purchased
              </span>
            ) : (
              <button
                onClick={handleBuy}
                className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;