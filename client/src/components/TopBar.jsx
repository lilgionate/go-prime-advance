import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-[#F1F7F9] text-[#14171A] py-0.5 font-semibold">
      <div className="w-full flex justify-between items-center px-10">
        <div className="flex space-x-4 text-lg">
          <a href="#linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#x" aria-label="X (formerly Twitter)">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#youtube" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#facebook" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="flex items-center space-x-4 text-xs sm:block hidden">
          <span>Call now: (800) 780-7133</span>
          <a href="#login" className="border border-[#14171A] py-1 px-3 rounded-md">Login</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
