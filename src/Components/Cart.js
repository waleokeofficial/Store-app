import React from 'react';


function Cart(props) {
const { cartItems, onAdd } = props;
console.log(cartItems);



    return(
        <div className="col-1 block">
            Cart
            <div className="">
               <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
               {
                   cartItems.map((item)=>(
                       <div key={item.id} className="row">
                            <div className="col-2">{item.name}</div>
                            <div className="col-2">
                                <button>-</button>
                                <button onClick={()=> onAdd(item)}>+</button>
                            </div>
                            <div className="col-2">{item.qty} x ${item.price} </div>
                       </div>
                   ))
               }
            </div>
        </div>
    )
}

export default Cart;