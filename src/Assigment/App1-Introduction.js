import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimport Bootstrap
import './App.css'; // Mengimport File Css
import Header from './Component/Header'; // Mengimport Komponen Header
import Landing from './Component/Landing'; // Mengimport komponen Landing

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