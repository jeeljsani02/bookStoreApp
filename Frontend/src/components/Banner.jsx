import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>

            <p className="text-sm md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tempora amet atque expedita.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>

          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>

        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src="/Banner.png"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="banner"
          />
        </div>

      </div>
    </>
  );
}

export default Banner;