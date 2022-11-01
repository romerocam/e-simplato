import React from "react";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logosimplatorojo.png";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import Avatar from "../img/avatar.png";
import isoLogo from "../img/isologosimplato.png";
import { motion } from "framer-motion";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop/tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Logo}
            className="w-16 object-cover"
            alt="logo"
          />
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
                )} */}
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">
              {/* {cartItems.length} */}2
            </p>
          </div>
        </div>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? isoLogo : Avatar}
            // src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
              New item <MdAdd />
            </p>
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
              Logout <MdLogout />
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
