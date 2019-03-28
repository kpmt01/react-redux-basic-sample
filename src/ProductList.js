import React, { Component } from 'react';
import Products from './Products'
import Product from './Product';

class ProductList extends Component {
    
    Listele = (x, i) => {
        return <Product key={i} data={x} />
    }

    render() {
        return (
            <ul className="list-group">
                {
                    Products.map(this.Listele)
                }
            </ul>
        );
    }
}

export default ProductList;