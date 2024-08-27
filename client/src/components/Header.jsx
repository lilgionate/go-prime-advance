import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">KAPITUS</div>
      <nav className="flex space-x-4">
        <a href="#solutions" className="hover:text-gray-400">Solutions</a>
        <a href="#products" className="hover:text-gray-400">Products</a>
        <a href="#partnerships" className="hover:text-gray-400">Partnerships</a>
        <a href="#resource" className="hover:text-gray-400">Resource Center</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <a href="#login" className="hover:text-gray-400">Login</a>
        <a href="#apply" className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">Apply Now</a>
      </div>
    </header>
  );
};

export default Header;
