import React from 'react';
import KapitusPlusImage from '../assets/goprimeplus.png'; // Replace with the correct image path
import './KapitusPlus.css';

const KapitusPlus = () => {
  return (
    <section className="py-10 bg-[#F5F8FA] kapitus-plus-section">
      <div className="lg:max-w-6xl sm:max-w-xl mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-10 items-center kapitus-plus-container">
        {/* Left side - Image */}
        <div className="bg-[#1b1b1b] rounded-lg flex justify-center kapitus-plus-image-container">
          <img src={KapitusPlusImage} alt="KapitusPLUS" className="w-full h-auto object-contain kapitus-plus-image" />
        </div>

        {/* Right side - Text content */}
        <div className="p-10 bg-[#FFFFE0] rounded-lg kapitus-plus-text-container" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <h3 className="text-lg text-gray-500 mb-2 kapitus-plus-subtitle">Experience GoPrimePLUS</h3>
          <h2 className="text-3xl font-bold text-[#1b1b1b] mb-6 kapitus-plus-title">Discover YOUR ideal financing solution.</h2>
          <p className="text-[#1b1b1b] mb-6 kapitus-plus-description">
            GoPrimeAdvance is committed to helping you find the best possible financing solutions for your small business – even if it’s not with us. Through our innovative GoPrimePLUS process, you can rest assured that not only is GoPrimeAdvance standing behind you, but our extensive financing network is too, providing a variety of options to support your business.
          </p>
          <a 
            href="#kapitus-plus" 
            className="border border-[#1b1b1b] text-[#1b1b1b] py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200 sm:text-center kapitus-plus-button"
          >
            See the GoPrimePLUS Difference
          </a>
        </div>
      </div>
    </section>
  );
};

export default KapitusPlus;
