import React from 'react';
import Forbes from '../assets/forbes-logo.webp';
import Cnn from '../assets/cnn-logo.webp';
import Fox from '../assets/fox-logo.webp';
import HeroImage1 from '../assets/Home-kap-banner.webp';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative bg-[#F5F8FA]">
      <section className="clip-bottom flex justify-between items-start text-[#F5F8FA] p-10">
        <div className="w-6/12 mt-14">
          <div className="text-3xl font-normal text-[#1b1b1b] mb-4">Invest in Your Future</div>
          <div className="text-6xl font-bold mb-10 leading-snug">Financing solutions to fuel your business.</div>
          <div className="flex space-x-4 text-lg">
            <a href="#apply" className="bg-[#14171A] text-white py-4 px-6 rounded">Apply Now</a>
            <a href="#discover" className="border border-[#F5F8FA] py-4 px-6 rounded">Discover The Difference</a>
          </div>
          <section className="flex flex-col items-start space-y-4 py-4 mt-40">
            <p className="text-lg text-[#F5F8FA] ml-1">In The News</p>
            <div className="flex justify-start space-x-14">
              <img src={Forbes} alt="Forbes" className="h-10" />
              <img src={Cnn} alt="CNN" className="h-10" />
              <img src={Fox} alt="Fox Business" className="h-10" />
            </div>
          </section>

        </div>

        <div className="w-6/12 flex justify-end items-start">
          <img 
            src={HeroImage1} 
            alt="Hero Section 1" 
            className="mt-5 w-full h-full object-cover rounded-[40px]"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
