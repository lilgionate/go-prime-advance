import React from 'react';
import KapitusPlusImage from '../assets/KapitusPlus-1.webp'; // Replace with the correct image path

const KapitusPlus = () => {
  return (
    <section className="py-10 bg-[#F5F8FA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side - Image */}
        <div className="bg-[#1b1b1b] p-6 rounded-lg flex justify-center">
          <img src={KapitusPlusImage} alt="KapitusPLUS" className="w-full h-auto object-contain" />
        </div>

        {/* Right side - Text content */}
        <div className="p-10 bg-[#FFFFE0] rounded-lg" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <h3 className="text-lg text-gray-500 mb-2">Experience GoPrimePLUS</h3>
          <h2 className="text-3xl font-bold text-[#1b1b1b] mb-6">Discover YOUR ideal financing solution.</h2>
          <p className="text-[#1b1b1b] mb-6">
            GoPrimeAdvance is committed to helping you find the best possible financing solutions for your small business – even if it’s not with us. Through our innovative GoPrimePLUS process, you can rest assured that not only is GoPrimeAdvance standing behind you, but our extensive financing network is too, providing a variety of options to support your business.
          </p>
          <a 
            href="#kapitus-plus" 
            className="border border-[#1b1b1b] text-[#1b1b1b] py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            See the GoPrimePLUS Difference
          </a>
        </div>
      </div>
    </section>
  );
};

export default KapitusPlus;
