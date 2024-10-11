import React from 'react';
import illustration from '../assets/customize-journey.webp';

const BusinessFinancing = () => {
  return (
    <div className="flex justify-between h-screen w-10/12 mx-auto mt-5 mb-24 items-center bg-white p-8 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="w-1/2">
        <h2 className="text-xl font-semibold text-gray-600">Business Financing</h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Get Approved Fast!</h1>
        <p className="text-gray-500 mt-4">
          Applying will have no impact on your credit.
        </p>
        <button className="mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
          Start Your Application
        </button>
      </div>

      {/* Right Section (Illustration) */}
      <div className="w-1/2">
        <img
          src={illustration} // Replace with your actual image path
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BusinessFinancing;
