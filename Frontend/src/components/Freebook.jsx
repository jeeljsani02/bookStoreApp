import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "./list.json";
import { useAuth } from "../context/AuthProvider";

function Freebook() {
  const { searchQuery } = useAuth();

  // Combined Filter: Category + Search Query
  const filterData = list.filter((data) => 
    data.category === "Free" && 
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  var settings = { dots: true, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 1 };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>Explore our selection of free books available for you.</p>
      </div>

      <div className="mt-6">
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => <Cards item={item} key={item.id} />)}
          </Slider>
        ) : (
          <div className="text-center py-5 text-gray-500">No free books found.</div>
        )}
      </div>
    </div>
  );
}

export default Freebook;