import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';
import data from './Components/data'
import { useState } from 'react';
import Signin from './Components/SignIn';

function App() {
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
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
      </div>
      <Signin></Signin>
    </div>
  );
}

export default App;
