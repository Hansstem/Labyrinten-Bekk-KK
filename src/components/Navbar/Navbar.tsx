import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../../assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  const login = () => {
    setShowAvatar(true); // Set showAvatar to true when login button is clicked
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md py-6 px-7.5 flex justify-between items-center">
      <Link to="/" className="text-2xl font-sans h-2 mb-10">
        <img className="max-h-16 pl-6" src={Logo} alt="logo" />
      </Link>
      <ul
        className={`flex justify-start items-center gap-16 ${isActive ? 'flex-col absolute top-full left-0 text-left w-full bg-white/70 py-2.5 px-2.5' : 'hidden'} md:flex md:static md:bg-transparent md:p-0`}
      >
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
            Match meg
          </Link>
        </li>
        <li onClick={removeActive}>
          <Link to="/" className="text-xl no-underline text-black">
            Kontakt Oss
          </Link>
        </li>
      </ul>
      <div className="w-32 pl-4">
        {!showAvatar && ( // Render the login button only if showAvatar is false
          <Button
            className="flex no-underline self-end rounded-md hover:bg-transparent/15 px-4 py-2 border border-black hover:border-transparent transition duration-300 hover:text-black"
            onClick={login}
          >
            Logg inn
          </Button>
        )}
        {showAvatar && ( // Conditionally render Avatar component based on showAvatar state
          <Avatar className="flex no-underline self-end items-center size-10 ">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}

export default Navbar;
