import './App.css';
import React from 'react';
import Header from './Components/Header';
import Homebody from './Components/HomeBody';


function HomePage() {
 
  return (
    <div className="HomePage">
        <Header></Header>
        <Homebody></Homebody>
    </div>
  );
}

export default HomePage;
