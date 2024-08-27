import React from 'react';

const resources = [
  {
    title: 'Traditional Bank vs. Alternative Lenders',
    description: 'Which is better for Your Small Business?',
    link: '#',
    image: 'path/to/image1.png',
  },
  {
    title: 'Small Business Loan Application Checklist',
    description: '',
    link: '#',
    image: 'path/to/image2.png',
  },
  {
    title: 'To Rent, To Lease or To Buy: Obtaining Expensive Equipment for Your Business',
    description: '',
    link: '#',
    image: 'path/to/image3.png',
  },
  {
    title: '7 Grants for Minority-Owned Small Businesses',
    description: '',
    link: '#',
    image: 'path/to/image4.png',
  },
];

const KnowledgeHub = () => {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Small Business Knowledge Hub</h2>
        <p className="text-gray-600">Educational resources to help you finance, manage, and grow your business.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <img src={resource.image} alt={resource.title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a href={resource.link} className="text-blue-500 hover:underline">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeHub;
