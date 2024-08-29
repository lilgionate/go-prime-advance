import React from 'react';

const services = [
  {
    title: 'Business Loans',
    description: 'The flexible business loans you need to grow the business you want.',
    link: '#business-loans',
  },
  {
    title: 'Equipment Financing',
    description: 'Purchase equipment without dipping into cash reserves.',
    link: '#equipment-financing',
  },
  {
    title: 'Business Line of Credit',
    description: 'Get access to cash at better rates than the average credit card.',
    link: '#business-line-of-credit',
  },
  {
    title: 'Revenue-Based Financing',
    description: 'Take advantage of fixed-cost financing based on your recent sales history.',
    link: '#revenue-based-financing',
  },
];

const Services = () => {
  return (
    <section className="bg-[#14171A] py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <div key={index} className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="mb-4">{service.description}</p>
          <a href={service.link} className="text-blue-500 hover:underline">Learn More →</a>
        </div>
      ))}
    </section>
  );
};

export default Services;
