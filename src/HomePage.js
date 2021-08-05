import './App.css';
import React from 'react';
import Header from './Components/Header';
import Homebody from './Components/HomeBody';
import LandingPage from './Components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Signin from './Components/SignIn';
import About from './Components/About';


function HomePage() {
 
  return (
    <div className="HomePage">
        <Header></Header>
        {/* <LandingPage></LandingPage> */}
        
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/Dashboard" component={Homebody}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
    </div>
  );
}

export default HomePage;
