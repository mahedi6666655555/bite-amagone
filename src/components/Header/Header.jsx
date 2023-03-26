import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="w-full h-20 flex px-20 justify-between items-center  bg-gray-800 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div >
        <a className="pl-5" href="#Order">Order</a>
        <a className="pl-5" href="#Order Review">Order Review</a>
        <a className="pl-5" href="#Manage Inventory">Manage Inventory</a>
        <a className="pl-5" href="#Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
