import React from 'react';
import Forbes from '../assets/forbes-logo.webp';
import Cnn from '../assets/cnn-logo.webp';
import Fox from '../assets/fox-logo.webp';
import HeroImage1 from '../assets/Home-kap-banner.webp';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative bg-[#F5F8FA]">
      <section 
  className="clip-bottom flex flex-col-reverse lg:flex-row justify-between items-center text-[#F5F8FA] p-10"
  style={{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 87%)', // Slightly more straight diagonal
  }}
>
        <div className="lg:w-6/12 w-full mt-14 text-center lg:text-left">
          <div className="text-xl lg:text-3xl font-normal text-[#D3D3D3] mb-2 lg:mb-4">Invest in Your Future</div>
          <div className="text-2xl lg:text-6xl font-bold mb-6 lg:mb-10 leading-snug">Financing solutions to fuel your business.</div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-lg items-center">
            <a href="#apply" className="bg-[#1b1b1b] text-white py-3 px-6 rounded">Apply Now</a>
            <a href="#discover" className="border border-white py-3 px-6 rounded text-white">Discover The Difference</a>
          </div>
          <section className="flex flex-col items-center lg:items-start space-y-4 py-4 mt-16 lg:mt-36">
            <p className="text-lg text-[#D3D3D3]">In The News</p>
            <div className="flex justify-center lg:justify-start space-x-10 lg:space-x-14">
              <img src={Forbes} alt="Forbes" className="h-7 lg:h-9" />
              <img src={Cnn} alt="CNN" className="h-7 lg:h-9" />
              <img src={Fox} alt="Fox Business" className="h-7 lg:h-9" />
            </div>
          </section>
        </div>

        <div className="lg:w-6/12 w-full flex justify-center lg:justify-end items-start mb-8 lg:mb-0">
          <img 
            src={HeroImage1} 
            alt="Hero Section 1" 
            className="w-11/12 lg:w-full h-auto object-cover rounded-[40px]"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
