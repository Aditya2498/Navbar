import React from 'react';
import {GrimNavbar} from './Components/GrimNavbar/GrimNavbar';
import {GrimButtons} from './Components/GrimButtons/GrimButtons';
import {GrimBackground} from './Components/GrimBackground/GrimBackground';
import './App.css';





function App() {
  return (
    <div>
    
    <GrimNavbar/>
    <GrimBackground/>
    <GrimButtons>Sign Up</GrimButtons>
    
   </div>
  );
}

export default App;
