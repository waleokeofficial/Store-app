import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Homebody from './Components/HomeBody';
import LandingPage from './Components/LandingPage';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Signin from './Components/SignIn';
import About from './Components/About';
import data from './Components/data';


function HomePage() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (producttt) => {
    const exist = cartItems.find((a) => a.id === producttt.id);
    // console.log(exist);

    if (exist) {
      setCartItems(cartItems.map((a) => ( a.id === producttt.id ? {...exist, qty: exist.qty + 1} : a )))
    }
    else {
      setCartItems([...cartItems, {...producttt, qty: 1}])
    }
  }
    const onRemove = (produckt) => {
      const exist = cartItems.find((a) => (a.id === produckt.id));
      if (exist.qty === 1){
        setCartItems(cartItems.filter((a)=> a.id !== produckt.id))
      }
      // if (exist.qty === 1){
      //   setCartItems([{...produckt, qty: 0}]);
      // }
      else{
        setCartItems(cartItems.map((a) => ( a.id === produckt.id ? {...exist, qty: exist.qty - 1} : a )))
      }
    }
 

  return (
    <div className="HomePage">
        <Header cartItems={cartItems}></Header>
        {/* <LandingPage></LandingPage> */}
        
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/dashboard"><Homebody products={ products } cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Homebody></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
    </div>
  );
}

export default HomePage;
