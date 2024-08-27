import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-bold">Discover</h3>
          <ul>
            <li><a href="#kapitus-difference" className="hover:underline">Kapitus Difference</a></li>
            <li><a href="#resource-center" className="hover:underline">Resource Center</a></li>
            <li><a href="#success-stories" className="hover:underline">Success Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">About</h3>
          <ul>
            <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="#leadership-team" className="hover:underline">Leadership Team</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#media-center" className="hover:underline">Media Center</a></li>
            <li><a href="#partner-api" className="hover:underline">Kapitus Partner API</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Products</h3>
          <ul>
            <li><a href="#business-loans" className="hover:underline">Business Loans</a></li>
            <li><a href="#sba-loans" className="hover:underline">SBA Loans</a></li>
            <li><a href="#line-of-credit" className="hover:underline">Line of Credit</a></li>
            <li><a href="#equipment-financing" className="hover:underline">Equipment Financing</a></li>
            <li><a href="#revenue-based-financing" className="hover:underline">Revenue Based Financing</a></li>
            <li><a href="#invoicing-factoring" className="hover:underline">Invoicing Factoring</a></li>
            <li><a href="#purchase-order-financing" className="hover:underline">Purchase Order Financing</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© 2024 Strategic Funding Source, Inc. All rights reserved.</p>
        <p>Kapitus and the Kapitus logo are registered trademarks of Strategic Funding Source, Inc.</p>
        <p>Loans made or brokered in California are made or brokered pursuant to California Finance Lenders License No. 603-G807.</p>
      </div>
    </footer>
  );
};

export default Footer;
