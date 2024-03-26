import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import About from './pages/About';
import Header from './components/Header'
import Contact from './pages/Contact';
import Home from './pages/Home';
import LabTest from './pages/LabTest';
import Profile from './account/Profile';
import Login from './account/Login';
import Register from './account/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<LabTest/>} />
          {/* <Route path="/cart" element={<Cart/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
