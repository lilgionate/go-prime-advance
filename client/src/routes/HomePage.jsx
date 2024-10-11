// HomePage.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Statistics from '../components/Statistics';
import KapitusPlus from '../components/KapitusPlus';
import ApplicationProcess from '../components/ApplicationProcess';
import BusinessCredit from '../components/BusinessCredit';
import KnowledgeHub from '../components/KnowledgeHub'; 
import Testimonials from '../components/Testimonials';
import Assistance from '../components/Assistance';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Statistics />
      <KapitusPlus />
      <ApplicationProcess />
      <BusinessCredit />
      <KnowledgeHub />
      <Testimonials />
      <Assistance />
      <Footer />
    </div>
  );
}

export default HomePage;
