import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { GiHamburger } from "react-icons/gi";

const navLinks = [
  {
    id: 1,
    name: "Menu",
    link: "#menu",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },

  {
    id: 4,
    name: "Weekly Special",
    link: "#weekly-special",
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
    <nav className=" bg-neutral-800 shadow-xl shadow-black/50 w-full fixed top-0 z-70">
      <div className="flex justify-between items-center px-4 py-4 sm:px-12 sm:py-6 ">
        {/*Logo*/}
        <div className="text-white">
          <GiHamburger size={30} />{" "}
        </div>
        {/*Burger Button*/}
        <button
          className=" z-10 md:hidden block text-red-100 text-[20px] hover:text-red-600 duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/*Overlay and Mobile Menu on Portal*/}
        {isOpen &&
          ReactDOM.createPortal(
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden flex place-content-center">
              <div className="absolute w-full bg-transparent transition-all duration-500">
                <ul className=" flex flex-col px-4 py-2  mt-40">
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
                          <Icon />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>,
            document.getElementById("overlay-root")
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
    </nav>
  );
};

export default Navbar;
