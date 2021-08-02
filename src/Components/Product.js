import React from 'react';

const Product = (props) => {
    const { product, onAdd } = props;

    return(
        <div className="col-1">
            <img className="img-box"></img>
            <h3>{product.name}</h3>
            <div>#{product.price.toFixed(2)}</div>
            <button className="btn" onClick={()=> onAdd(product)}>Add to Cart</button>
        </div>
    )
}


export default Product
