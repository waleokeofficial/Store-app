import React from 'react';


function Cart(props) {
const { cartItems, onAdd, onRemove } = props;
console.log(cartItems);

const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
const shippingPrice = itemsPrice < 2000 ? 0 : 1400;
const taxPrice = 100;
const totalPrice = itemsPrice + shippingPrice + taxPrice;



    
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
                                <button className="btn-remove" onClick={()=> onRemove(item)}>-</button>
                                <button className="btn-add" onClick={()=> onAdd(item)}>+</button>
                            </div>
                            <div className="col-2 txt-right">{item.qty} x #{item.price.toFixed(2)} </div>
                       </div>
                   ))
               }
               
               {
                   cartItems.length === 0 ? "":
                   <div className="">
                       <hr></hr>
                        <div className="row">
                            <div>Items price</div>
                            <div>#{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>Tax Price</div>
                            <div>#{taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>Shipping Price</div>
                            <div>#{shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>Total Price</div>
                            <div>#{totalPrice.toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        <button className="btn" onClick={()=> alert("You've successfully completed your Order")}>Checkout</button>
                   </div>
               }
            </div>
        </div>
    )
}

export default Cart;