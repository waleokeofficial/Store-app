import Main from './Main';
import Cart from './Cart';
import data from './data'
import { useState } from 'react';
import Signin from './SignIn';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';

function Homebody() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  // const itemsPrice = 

  const onAdd = (producttt) => {
    const exist = cartItems.find((a) => a.id === producttt.id);
    console.log(exist);

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
  
// setCartItems(4, 7, 8);
  return (
    <div className="Homebody">
        
        <div className="row">
            <Main products={products} onAdd={onAdd}></Main>
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
        </div>
    </div>
  );
}

export default Homebody;
