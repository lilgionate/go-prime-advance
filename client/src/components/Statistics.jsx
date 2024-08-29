import React from 'react';

const Statistics = () => {
  return (
    <section className="flex justify-evenly py-8 bg-[#F5F8FA] text-[#1b1b1b]">
      <div className="text-center">
        <div className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
          $6 Billion
        </div>
        <div className="text-xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
          In Capital Provided
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
          50,000
        </div>
        <div className="text-xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
          Businesses Funded
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
          Inc. 5000
        </div>
        <div className="text-xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
          Recognized
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
          4.6
        </div>
        <div className="text-xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)' }}>
          Google Reviews
        </div>
      </div>
    </section>
  );
};

export default Statistics;
