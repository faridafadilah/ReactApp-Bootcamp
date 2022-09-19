import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header';
import Landing from './Component/Landing';

function App() {
  return (
    <div className="App">
    {/* Component Header untuk Tampilan Navbar */}
    <Header /> 
    {/* Component Landing untuk Tampilan Content */}
    <Landing />
    </div>
  );
}

export default App;