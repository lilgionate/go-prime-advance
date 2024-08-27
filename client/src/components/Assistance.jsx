import React from 'react';

const Assistance = () => {
  return (
    <section className="bg-gray-800 text-white py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Need assistance?</h2>
      <p className="mb-8">Connect with one of our financing specialists at (646) 257-5406.</p>
      <div className="flex justify-center space-x-4">
        <a href="#apply" className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded">Apply Now</a>
        <a href="#find-solution" className="border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-800">Find Your Solution</a>
      </div>
    </section>
  );
};

export default Assistance;
