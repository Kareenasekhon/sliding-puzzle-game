import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18
import App from './App'; // Ensure App is correctly imported
import './index.css'; // If you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
