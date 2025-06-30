import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-white">
        <p className="mb-2">© 2025 Baner. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="relative text-white after:content-[] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500   duration-500"
          >
            Privacy Policy
          </a>
          <a
            className="relative text-white after:content-[] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-500 after:transition-all after:duration-500   duration-500"
            href="#"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
