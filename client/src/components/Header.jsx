import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../assets/biz-funder-logo.jpg';
import { Link } from 'react-router-dom';
import TopBar from './TopBar'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust based on the TopBar's height
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <TopBar />
      <header className={`flex justify-between items-center py-4 px-10 bg-[#1DA1F2] text-[#F5F8FA] font-semibold ${isSticky ? 'sticky-header' : ''}`}>
        <img src={Logo} className="h-10 w-auto" alt="Logo" />

        <div className="lg:hidden z-30">
          <button
            onClick={toggleMenu}
            className="text-[#F5F8FA] focus:outline-none transition-transform duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-0 left-0 w-full h-full bg-[#1DA1F2] z-20 transform transition-transform duration-300 ease-in-out lg:static lg:w-auto lg:h-auto lg:translate-x-0 lg:flex lg:space-x-4 lg:items-center`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-6 lg:space-y-0 lg:flex-row">
            <a href="#solutions" className="block text-center text-lg hover:text-[#657786] py-2 px-4">Solutions</a>
            <a href="#products" className="block text-center text-lg hover:text-[#657786] py-2 px-4">Products</a>
            <a href="#partnerships" className="block text-center text-lg hover:text-[#657786] py-2 px-4">Partnerships</a>
            <a href="#resource" className="block text-center text-lg hover:text-[#657786] py-2 px-4">Resource Center</a>
            <a href="#about" className="block text-center text-lg hover:text-[#657786] py-2 px-4">About</a>
            <a href="#contact" className="block text-center text-lg hover:text-[#657786] py-2 px-4">Contact</a>
            <a 
              href="#login" 
              className="block text-center border border-[#14171A] text-[#14171A] py-2 px-4 rounded mt-2 lg:mt-0 lg:hidden"
            >
              Login
            </a>
            <Link 
              to="/apply-now"
              className="block text-center bg-[#14171A] text-[#F1F7F9] py-3 px-4 rounded mt-2 lg:mt-0"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
