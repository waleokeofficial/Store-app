import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';
import data from './Components/data'
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((a) => a.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((a) => ( a.id === product.id ? {... exist, qty: exist.qty + 1} : a )))
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  } 

  
  
// setCartItems(4, 7, 8);
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Cart cartItems={cartItems} onAdd={onAdd}></Cart>
      </div>
    </div>
  );
}

export default App;
