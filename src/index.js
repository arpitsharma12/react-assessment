import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BusContext from './context/busContext';
import BusState from './context/BusState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BusState>
  <React.StrictMode>
     <App />
  </React.StrictMode>
  </BusState>
);
