import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../assets/logo.svg";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md py-6 pl-7.5 flex justify-between items-center gap-10">
      <Link to="/" className="text-2xl font-sans h-5">
        <img className="max-h-20 pb-8 pl-6" src={Logo} alt="logo" />
      </Link>
      <ul className={`flex justify-between items-center gap-16 ${isActive ? 'absolute top-17.5 left-0 text-left w-full bg-white/70 py-2.5 px-2.5 transition-all duration-700' : 'hidden'} md:flex md:static md:bg-transparent md:p-0`}>
        <li onClick={removeActive}>
          <Link to="/" className="text-xl no-underline text-black">
            Hjem
          </Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/discover" className="text-xl no-underline text-black">
            Utforsk
          </Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/" className="text-xl no-underline text-black">
            Registrer Verv
          </Link>
        </li>
      </ul>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
        <span className="block bg-black w-5 h-0.75 my-1 transition-all duration-300"></span>
        <span className={`${isActive ? 'opacity-0' : 'block'} bg-black w-5 h-0.75 my-1 transition-all duration-300`}></span>
        <span className={`block bg-black w-5 h-0.75 my-1 transition-all duration-300 ${isActive ? 'transform translate-y-2 rotate-45' : ''}`}></span>
        <span className={`block bg-black w-5 h-0.75 my-1 transition-all duration-300 ${isActive ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
      </div>
    </div>
  );
}

export default Navbar;
