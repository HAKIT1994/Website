import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile'
import Other from './components/pages/Other'
import Footer from './components/Footer';

import {
  Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/other' element={<Other/>}/>
      </Routes>
    <Footer />
    </>
  )
}

export default App;
