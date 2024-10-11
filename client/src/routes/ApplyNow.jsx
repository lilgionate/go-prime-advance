// HomePage.js
import React from 'react';
import Header from '../components/Header';
import ApplyNowApp from '../components/ApplyNowApp';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ApplyNow() {
  return (
    <div>
      <Header />
      <ApplyNowApp />
      <Footer />
    </div>
  );
}

export default ApplyNow;
