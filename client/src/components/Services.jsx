import React from 'react';

import Img1 from '../assets/success_story_1.webp';
import Img2 from '../assets/success_story_2.webp';
import Img3 from '../assets/success_story_3.webp';
import Img4 from '../assets/success_story_4.webp';

const services = [
  {
    title: 'Business Loans',
    description: 'The flexible business loans you need to grow the business you want.',
    link: '#business-loans',
    image: Img1,  // Replace with the correct image path
  },
  {
    title: 'Equipment Financing',
    description: 'Purchase equipment without dipping into cash reserves.',
    link: '#equipment-financing',
    image: Img2,  // Replace with the correct image path
  },
  {
    title: 'Business Line of Credit',
    description: 'Get access to cash at better rates than the average credit card.',
    link: '#business-line-of-credit',
    image: Img3,  // Replace with the correct image path
  },
  {
    title: 'Revenue-Based Financing',
    description: 'Take advantage of fixed-cost financing based on your recent sales history.',
    link: '#revenue-based-financing',
    image: Img4,  // Replace with the correct image path
  },
];

const Services = () => {
  return (
    <div className="bg-[#F5F8FA] py-20">
      {/* Title Section */}
      <div className="text-center mb-36">
        <h2 className="text-4xl font-bold text-[#1b1b1b] mb-4">Your Next Success Story Starts Here</h2>
        <p className="text-lg text-[#1b1b1b]">Discover a range of financing solutions designed to provide the working capital you need to power business growth.</p>
      </div>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-40 gap-x-24 px-28">
        {services.map((service, index) => (
          <div 
          key={index} 
          className="relative mt-64 bg-[#F5F8FA] py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="absolute -top-80 left-1/2 transform -translate-x-1/2 w-62 h-62 object-cover"
          />
          <div className="text-center flex flex-col justify-center items-center h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-snug">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-xs">{service.description}</p>
            <a 
              href={service.link} 
              className="text-[#1DA1F2] text-sm font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
        ))}
      </section>
      <div className="text-center mt-20">
        <a 
          href="#explore-financing-options" 
          className="bg-[#1DA1F2] hover:bg-[#7a1ee1] text-white py-4 px-8 rounded-lg transition-all duration-300 ease-in-out"
        >
          Explore Financing Options
        </a>
      </div>
    </div>
  );
};

export default Services;
