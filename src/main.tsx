import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
//Sånn jeg importerer komponenter nå med @ etter config i Vite og TS:
// import formatDate from '@/utils/formatDate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
