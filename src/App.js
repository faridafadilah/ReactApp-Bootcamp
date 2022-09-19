import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
    <Header />
      <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>BootCamp Batch #3</h1>
        <h3>Farida Fadilah</h3>
      </div>
    </div>
  );
}

export default App;