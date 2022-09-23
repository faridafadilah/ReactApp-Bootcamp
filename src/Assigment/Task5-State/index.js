import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dataArray from './Component/data';

// Merender Komponent APP Untuk ditampilkan di Id root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Memasukan dataArray ke Komponen App
  <React.StrictMode>
    <App dataArray={dataArray}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();