import React from 'react';

const Product = (props) => {
    const { product, onAdd } = props;

    return(
        <div>
            <img className="img-box"></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <button onClick={onAdd}>Add to Cart</button>
        </div>
    )
}


export default Product
