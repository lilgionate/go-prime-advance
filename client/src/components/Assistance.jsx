import React from 'react';

const Assistance = () => {
  return (
    <div className='bg-[#F5F8FA]'>
    <section 
      className="relative bg-[#1DA1F2] text-[#F5F8FA] pt-20 pb-5 text-center" 
      style={{
        clipPath: 'ellipse(75% 100% at 50% 100%)', // Adjusted to create a curved border at the top
      }}
    >
      <div className="container mx-auto mt-10 mb-44">
        <h2 className="text-4xl font-medium mb-4">Need assistance?</h2>
        <h2 className="mb-8 text-4xl font-medium">Connect with one of our financing specialists at (646) 257-5406.</h2>
        <div className="flex justify-center space-x-4">
          <a href="#apply" className="bg-[#1b1b1b] hover:bg-purple-700 text-white py-4 px-7 rounded transition-all duration-300 ease-in-out transform hover:scale-105">Apply Now</a>
          <a href="#find-solution" className="border border-[#F5F8FA] py-4 px-7 rounded hover:bg-white hover:text-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105">Find Your Solution</a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Assistance;
