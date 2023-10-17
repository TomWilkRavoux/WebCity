import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Languages
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
