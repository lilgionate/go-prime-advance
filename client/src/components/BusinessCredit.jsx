import React from 'react';
import ExperianImage from '../assets/Experian.webp'; // Replace with your actual image path
import './BusinessCredit.css'; // Ensure you have a corresponding CSS file for custom styles

const BusinessCredit = () => {
  return (
    <div className='bg-[#F5F8FA] pt-10'>
    <section className="relative text-white p-10 flex items-center justify-center custom-oval">
      <div className="w-3/12 flex justify-end mr-10">
        <img src={ExperianImage} alt="Experian" className="h-auto object-cover" />
      </div>
      <div className="w-1/2">
        <p className="text-[#1b1b1b] text-lg mb-4">Advertiser Disclosure</p>
        <h2 className="text-4xl font-bold mb-6">Get to Know Your Business Credit</h2>
        <p className="text-lg mb-14">
          Did you know that business credit plays a key role in the amount of financing you can acquire? GoPrime has joined forces with Experian to help small business owners better understand their business credit. With Experian you can access a variety of products and plans to help you establish, monitor, and improve your business credit score.
        </p>
        <a href="#explore-options" className="bg-[#1b1b1b] hover:bg-purple-700 text-white py-4 px-8 rounded">
          Explore Options
        </a>
      </div>
    </section>
    </div>
  );
};

export default BusinessCredit;
