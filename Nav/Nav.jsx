import React from 'react';
import Logo from "../Images/logo.png";
import { MdShoppingCart } from "react-icons/md";
import User from "../Images/user.png";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-20 bg-blue-50">
        {/* Laptop */}
        <div className="hidden md:flex w-full h-full">
                <img src={Logo} className="w-12 object-cover" alt="logo"/>
            <ul className="flex items-center gap-12 m-auto">
                <li className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Home
                </li>
                <li className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    About Us
                </li>
                <li className="text-xl hover:text-blue-900 duration-100 transition-all ease-in-out cursor-pointer">
                    Items
                </li>
            </ul>
            <div className="flex items-center mr-6">
                <MdShoppingCart className="text-blue-900 text-2xl cursor-pointer" />
                <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                    <p className="text-xs text-white">2</p>
                </div>
            </div>
            <img src={User} className="w-5 h-5 relative top-6 -right-5 cursor-pointer" alt="user" />
        </div>
        {/* for mobile */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="flex items-center mr-6">
            <MdShoppingCart className="text-blue-900 text-2xl cursor-pointer" />
            <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                <p className="text-xs text-white">2</p>
            </div>
        </div>
            <img src={Logo} className="w-12 object-cover" alt="logo"/>
        <img src={User} className="w-5 h-5 relative top-6 -right-5 cursor-pointer mr-4" alt="user" />  
        </div>
    </div>
  );
};

export default Header;
