import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import Logo from '../assets/biz-funder-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#1DA1F2] text-[#F5F8FA] py-10 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-8">
        
        {/* Logo Section */}
        <div className="md:col-span-1">
          <img src={Logo} alt="Kapitus Logo" className="mb-4" />
          <div className="bg-transparent border border-[#F5F8FA] p-4 rounded-lg mt-8">
            <h3 className="text-lg font-bold mb-2">Sign Up For Our Newsletter</h3>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full p-2 mb-4 rounded bg-transparent border border-white text-white placeholder-gray-400"
            />
            <button className="w-full py-2 px-4 border border-white rounded hover:bg-white hover:text-[#1b1b1b] transition-all">Join</button>
          </div>
        </div>

        {/* Discover Section */}
        <div className="md:col-span-3 ml-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Discover</h3>
              <ul>
                <li><a href="#kapitus-difference" className="hover:underline">GoPrime Difference</a></li>
                <li><a href="#resource-center" className="hover:underline">Resource Center</a></li>
                <li><a href="#success-stories" className="hover:underline">Success Stories</a></li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul>
                <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
                <li><a href="#leadership-team" className="hover:underline">Leadership Team</a></li>
                <li><a href="#careers" className="hover:underline">Careers</a></li>
                <li><a href="#media-center" className="hover:underline">Media Center</a></li>
                <li><a href="#partner-api" className="hover:underline">GoPrime Partner API</a></li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
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
        </div>
      </div>

      {/* Social Icons and Copyright */}
      <div className="mt-12 flex justify-between items-center text-sm">
        <div>
          <p>© 2024 Strategic Funding Source, Inc. All rights reserved.</p>
          <p>GoPrime and the GoPrime logo are registered trademarks of Strategic Funding Source, Inc.</p>
          <p>Loans made or brokered in New York are made or brokered pursuant to New York Finance Lenders License No. 603-G609.</p>
        </div>
        <div className="flex space-x-4 text-xl mr-10">
          <a href="#facebook" className="hover:text-gray-400"><FaFacebookF /></a>
          <a href="#linkedin" className="hover:text-gray-400"><FaLinkedinIn /></a>
          <a href="#twitter" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#youtube" className="hover:text-gray-400"><FaYoutube /></a>
          <a href="#instagram" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
