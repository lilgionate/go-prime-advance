import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MessengerCustomerChat from 'react-messenger-customer-chat';

const path = window.location.pathname

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App /> : <MessengerCustomerChat
    pageId="101423728451383"
    appId="537847985430935"
  /> }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
