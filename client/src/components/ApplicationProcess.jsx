import React from 'react';
import Img1 from '../assets/build_1.webp';  // Replace with your actual image paths
import Img2 from '../assets/build_2.webp';
import Img3 from '../assets/build_3.webp';
import './ApplicationProcess.css'; // Import the custom CSS

const steps = [
  {
    step: 'Step 1',
    title: 'Streamlined Application Process',
    description: 'In business time is of the essence – and we value yours. Our simple process allows you to apply for multiple financing solutions and receive up to six competing offers with one simple application.',
    link: '#apply',
    image: Img1,  // Image for Step 1
    buttonText: 'Apply Now',  // Button text for Step 1
  },
  {
    step: 'Step 2',
    title: 'Choose Your Offer',
    description: 'The GoPrimePLUS process provides a wide array of financing options, allowing you to easily compare type, size, terms, fees, and total cost of financing for multiple offers all at once.',
    link: '#offers',
    image: Img2,  // Image for Step 2
    buttonText: 'Get Offers',  // Button text for Step 2
  },
  {
    step: 'Step 3',
    title: 'Use Your Funds',
    description: 'Go renovate. Go buy equipment. Start hiring. Open a new location. Purchase that inventory. Get your business on track for growth!',
    link: '#get-started',
    image: Img3,  // Image for Step 3
    buttonText: 'Get Started',  // Button text for Step 3
  },
];

const ApplicationProcess = () => {
  return (
    <section className="application-process-section py-10 px-20 bg-[#F5F8FA]">
      {/* Title Section */}
      <div className="application-process-title text-center mt-14 mb-10">
        <h2 className="text-4xl font-bold text-[#1b1b1b] mb-8">Build Your Customized Financing Experience</h2>
        <p className="text-lg text-[#1b1b1b] leading-relaxed">We believe that every business is unique, and your financing should be too. From small business loans to equipment financing and everything in between, GoPrimePLUS has you covered. Our team of seasoned financing specialists works closely with you to craft a personalized financing package that aligns with your goals. GoPrimeAdvance is your solution for a customized financing experience that simplifies the process while providing a diverse range of options to make your financing experience uniquely yours.</p>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="application-process-step flex flex-col lg:flex-row items-center px-16 py-10 border rounded-lg shadow-md bg-[#ffffff] space-y-5 lg:space-y-0 lg:space-x-10">
            <div className="w-3/6 text-center lg:text-left flex flex-col justify-center lg:items-start h-full">
              <h3 className="text-lg font-bold mb-6 text-[#1DA1F2]">{step.step}</h3>
              <h2 className="text-4xl font-bold mb-8">{step.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{step.description}</p>
              <a 
                href={step.link} 
                className="bg-[#1DA1F2] text-white py-2 px-4 rounded hover:bg-[#0d8ecf] transition-colors duration-200"
              >
                {step.buttonText}
              </a>
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <img 
                src={step.image} 
                alt={step.title} 
                className="object-cover rounded-lg shadow-md ml-60"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationProcess;
