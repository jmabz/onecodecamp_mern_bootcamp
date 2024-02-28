import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../../frontend/src/components/Header';
import Home from '../../frontend/src/pages/Home';
import Shop from './pages/Shop';
import Orders from './pages/Orders';
import Jokes from './pages/Jokes';
import ContactUs from '../../frontend/src/pages/ContactUs';
import AboutUs from '../../frontend/src/pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/jokes" element={<Jokes/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
