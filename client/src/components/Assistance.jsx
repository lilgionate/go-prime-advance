import React from 'react';
import './Assistance.css'; // Import the custom CSS

const Assistance = () => {
  return (
    <div className='bg-[#F5F8FA]'>
      <section 
        className="assistance-section relative bg-[#1DA1F2] text-[#F5F8FA] pt-20 pb-5 text-center" 
        style={{
          clipPath: 'polygon(0% 0%, 100% 17%, 100% 100%, 0% 100%)', // Diagonal line with the left side high and right side low at the top
        }}
      >
        <div className="container mx-auto mt-10 mb-44">
          <h2 className="text-4xl font-medium mb-4">Need assistance?</h2>
          <h2 className="mb-8 text-4xl font-medium">Connect with one of our financing specialists at (347) 309-9598.</h2>
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
