import React from "react";
import Delivery from "../img/delivery.png";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-red-100 rounded-full px-4 py-1">
          <p className="text-base text-red-500 font-semibold">Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Schedule your delivery{" "}
          <span className="text-red-500 text-[2.5rem] md:text-[4.5rem]">any time you want</span>
        </p>
        <p className="text-base text-textColo text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          architecto neque voluptas consequatur dolor quam quas magnam
          reiciendis quasi rerum est, culpa maiores officiis eos veniam
          recusandae unde magni reprehenderit.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-red-600 to-red-200 w-full md:w-auto px-2 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1"></div>
    </div>
  );
};

export default MainContainer;
