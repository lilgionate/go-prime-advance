import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ChatPopup from './components/ChatPopup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ChatPopup />
      <Footer />
    </div>
  );
}

export default App;
