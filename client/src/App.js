import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Statistics from './components/Statistics';
import KapitusPlus from './components/KapitusPlus.jsx';
import ApplicationProcess from './components/ApplicationProcess';
import BusinessCredit from './components/BusinessCredit';
import KnowledgeHub from './components/KnowledgeHub'; 
import Testimonials from './components/Testimonials';
import Assistance from './components/Assistance';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <TopBar />
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

export default App;
