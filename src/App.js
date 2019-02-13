import React from 'react';
import productsData from "./vschoolProducts.js";
import Product from "./Product";

function App(){
    const productComponents = productsData.map( item => <Product key={item.id} product={item} /> );
    return(
        <div>
            {productComponents}
        </div>
    );
}

export default App;