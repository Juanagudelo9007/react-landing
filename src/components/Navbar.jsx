import React, { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    name: "Menu",
    link: "#menu",
  },
  {
    id: 2,
    name: "About",
    link: "about",
  },
  {
    id: 3,
    name: "Contact",
    link: "contact",
  },
];

const socialM = [
  {
    id: 1,
    name: "Instagram",
    link: "#products",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "Facebook",
    link: "about",
    icon: FaFacebook,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-800 shadow-xl shadow-black/50 w-full fixed top-0">
      <div className="flex justify-between items-center px-4 py-4 sm:px-12 sm:py-6 ">
        {/*Logo*/}
        <div className="text-white">logo</div>
        {/*Burger Button*/}
        <button
          className=" z-10 md:hidden block text-red-100 text-[20px] hover:text-red-600 duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
        {/*Overlay*/}

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
        )}

        {/*Navbar links*/}
        <div className="hidden md:block">
          <ul className="flex  space-x-5 sm:space-x-10 sm:text-lg text-sm ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="relative text-white after:content-[] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500 transition-transform hover:scale-125 transform inline-block duration-500"
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Social Media*/}
        <div className="hidden md:block">
          <ul className=" flex  space-x-4 sm:space-x-8">
            {socialM.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.id}>
                  <a rel="noopener noreferrer">
                    <Icon className="text-white w-6 h-6  transition-transform hover:scale-125 hover:text-red-500 duration-300" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/*Mobile Menu*/}
      <div
        className={`md:hidden absolute w-full bg-[transparent] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-500`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navLinks.map((link) => (
            <li className="py-2 text-center" key={link.id}>
              <a
                className="text-white hover:text-red-500 transition-all duration-300"
                href={link.link}
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="w-full flex space-x-4 px-4 py-2 border-t border-red-400 justify-center">
          {socialM.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <a
                  className="text-xl text-white hover:text-red-500 transition-all duration-300"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
