import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logosimplatorojo.png";
import { MdShoppingCart } from "react-icons/md";
import Avatar from "../img/avatar.png";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop/tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-16 object-cover" alt="logo" />
          {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
        </Link>
        <ul className="flex items-center gap-8">
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Menu
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Service
          </li>
        </ul>
        <div
          className="relative flex items-center justify-center"
          // onClick={showCart}
        >
          <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
          {/* {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )} */}
        </div>
        <img
          src={Avatar}
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          alt="userprofile"
        />
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
