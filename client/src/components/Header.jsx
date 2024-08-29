import React from 'react';
import './Header.css';
import Logo from '../assets/biz-funder-logo.jpg';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-10 bg-[#1DA1F2] text-[#F5F8FA] font-semibold">
      <img src={Logo} className="h-10 w-auto" alt="Logo" />

      <div className="flex space-x-4 items-center">
        <nav className="flex space-x-4 mx-4">
          <a href="#solutions" className="hover:text-[#657786]">Solutions</a>
          <a href="#products" className="hover:text-[#657786]">Products</a>
          <a href="#partnerships" className="hover:text-[#657786]">Partnerships</a>
          <a href="#resource" className="hover:text-[#657786]">Resource Center</a>
          <a href="#about" className="hover:text-[#657786]">About</a>
          <a href="#contact" className="hover:text-[#657786]">Contact</a>
        </nav>
        <a 
          href="#apply" 
         className="bg-[#14171A] text-[#F1F7F9] py-3 px-4 rounded"
        >
          Apply Now
        </a>
      </div>
    </header>
  );
};

export default Header;
