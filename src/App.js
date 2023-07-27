import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/About';
import weed from './components/images/profile.jpg';
import './Style.css';
import {Route, Routes} from "react-router-dom";



import Homepage from './components/Homepage';



function App() {

  
   
  
  return (
    <div >
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      
  </Routes>
    </div>
  );
}

export default App;
