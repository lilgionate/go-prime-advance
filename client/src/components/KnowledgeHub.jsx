import React from 'react';

import Knowledge1 from '../assets/homepage-knowledge-1.webp';
import Knowledge2 from '../assets/homepage-knowledge-2.jpg';
import Knowledge3 from '../assets/homepage-knowledge-3.jpg';
import Knowledge4 from '../assets/homepage-knowledge-4.jpg';

const resources = [
  {
    title: 'Traditional Bank vs. Alternative Lenders',
    description: 'Which is better for Your Small Business?',
    link: '#',
    image: Knowledge1, // Replace with your actual image paths
  },
  {
    title: 'Small Business Loan Application Checklist',
    description: 'Manage your Money',
    link: '#',
    image: Knowledge4, // Replace with your actual image paths
  },
  {
    title: 'To Rent, To Lease or To Buy: Obtaining Expensive Equipment for Your Business',
    description: 'Manage your Money',
    link: '#',
    image: Knowledge3, // Replace with your actual image paths
  },
  {
    title: '7 Grants for Minority-Owned Small Businesses',
    description: 'Manage your Money',
    link: '#',
    image: Knowledge2, // Replace with your actual image paths
  },
];

const KnowledgeHub = () => {
  return (
    <section className="bg-[#F5F8FA] pt-32">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#1b1b1b]">Small Business Knowledge Hub</h2>
        <p className="text-lg text-gray-600">Educational resources to help you finance, manage, and grow your business.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-20">
        {resources.map((resource, index) => (
          <div key={index} className="bg-[#E1E8ED] rounded-lg shadow-md h-fit">
            <img 
              src={resource.image} 
              alt={resource.title} 
              className="w-full h-4/6 object-cover rounded-t-lg mb-4" 
            />
            <div className='px-6 py-2 pb-6'>
              <p className="text-sm text-[#6e7073] font-semibold mb-2">{resource.description}</p>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-2 leading-tight">{resource.title}</h3>
              <a href={resource.link} className="text-[#1DA1F2] font-semibold hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;
