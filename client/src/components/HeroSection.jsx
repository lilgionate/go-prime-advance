import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white p-10">
      <div className="text-4xl font-bold mb-4">Financing solutions to fuel your business.</div>
      <div className="text-lg mb-8">Invest in Your Future</div>
      <div className="flex space-x-4">
        <a href="#apply" className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">Apply Now</a>
        <a href="#discover" className="border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-800">Discover The Difference</a>
      </div>
    </section>
  );
};

export default HeroSection;
