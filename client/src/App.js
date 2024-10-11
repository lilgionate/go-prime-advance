// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import ApplyNow from './routes/ApplyNow';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        {/* add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
