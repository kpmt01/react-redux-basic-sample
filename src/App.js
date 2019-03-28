import React, { Component } from 'react';
import Sayi from './Sayi';
import Extra from './extra';
import ProductList from './ProductList';
import Sepetim from './Sepetim';

class App extends Component {


  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-6">
            <h1>Ürün Listesi</h1>
            <ProductList />
          </div> 
          <div className="col-6">
            <h1 className="text-right">Sepetim</h1>
            <Sepetim />
          </div>        
        </div>
        <div className="row align-items-center flex-column mt-5">
          <Sayi />
          <Extra />
        </div>
      </div>
    );
  }
}

export default App;
