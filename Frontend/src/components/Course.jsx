import React from "react";
import Cards from "./Cards";
import list from "./list.json";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Course() {
  const { searchQuery } = useAuth();

  // Filter Logic
  const filteredBooks = list.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you <span className="text-pink-500"> Here! :)</span>
        </h1>
        
        {/* Paragraph added here */}
        <p className="mt-8 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, 
          iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, 
          nisi expedita quas quidem debitis dolore non aspernatur praesentium assumenda sint quibusdam, 
          perspiciati, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendi sunt quis 
          sed magnam consequatur!
        </p>

        <Link to="/">
          <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <div className="col-span-full text-center py-10">
            <h2 className="text-xl text-gray-500">No books found matching "{searchQuery}"</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Course;