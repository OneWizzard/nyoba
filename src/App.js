import Navbar from './navbar/navbar';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import Nama from './pages/name'
import BiodataPannur from './pages/biodata1'
import BiodataIwan from './pages/biodata2'
import Contact from './pages/contact'
import './App.css';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" component={Home}/>
          <Route path="/nama" component={Nama}/>
          <Route path="/Biodata1" component={BiodataPannur}/>
          <Route path="/Biodata2" component={BiodataIwan}/>
          <Route path="/Contact" component={Contact}/>
        </Routes>
    </Router>
  );
}

export default App;
