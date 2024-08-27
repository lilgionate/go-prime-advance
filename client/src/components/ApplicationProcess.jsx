import React from 'react';

const steps = [
  {
    step: 'Step 1',
    title: 'Streamlined Application Process',
    description: 'In business time is of the essence – and we value yours. Our simple process allows you to apply for multiple financing solutions and receive up to six competing offers with one simple application.',
    link: '#apply',
  },
  {
    step: 'Step 2',
    title: 'Choose Your Offer',
    description: 'The KapitusPLUS process provides a wide array of financing options, allowing you to easily compare type, size, terms, fees, and total cost of financing for multiple offers all at once.',
    link: '#offers',
  },
  {
    step: 'Step 3',
    title: 'Use Your Funds',
    description: 'Go renovate. Go buy equipment. Start hiring. Open a new location. Purchase that inventory. Get your business on track for growth!',
    link: '#get-started',
  },
];

const ApplicationProcess = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">{step.step}</h3>
            <h2 className="text-xl font-bold mb-4">{step.title}</h2>
            <p className="mb-4">{step.description}</p>
            <a href={step.link} className="text-blue-500 hover:underline">Get Started →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationProcess;
