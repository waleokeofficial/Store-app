import React from 'react';
import Product from './Product';


const Main =(props)=>{

    const { products, onAdd } = props;

    return(
        <div className="main col-2 block">
          <h3>Cakes</h3> <br></br>
          <div className="row">
              {products.map((product) => (<Product key={product.id} product={product} onAdd={onAdd}></Product>))}
          </div>



          
          {/* <div> */}
            {/* <div>
                <div className="img-box"></div>
                <div>Velvet Cakes</div>
                <div>$430</div>
            </div>
            <div>
                <div className="img-box"></div>
                <div>Velvet Cakes</div>
                <div>$430</div>
            </div>
            <div>
                <div className="img-box"></div>
                <div>Velvet Cakes</div>
                <div>$430</div>
            </div> */}
          {/* </div> */}
        </div>
    )
}

export default Main;
