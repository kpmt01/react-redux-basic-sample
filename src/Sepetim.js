import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './Products' 

class Sepetim extends Component {

    sepettenSil = (id) => {
        this.props.dispatch({ type: 'sepettenSil', id: id });
    }

    Listele = (x, i) => {
        let urun = Products.filter(y => { return y.id === x.id });
        return (
            <li key={i} className="list-group-item d-flex flex-row">
                {urun[0].isim}
                <span className="ml-auto">{(urun[0].fiyat * x.count).toFixed(2)} TL x {x.count}</span>
                <button className="btn btn-sm btn-danger ml-3" onClick={() => {this.sepettenSil(x.id)}}>Sil</button>
            </li>
        );
    }

    toplamHesapla = () => {
        let { sepet } = this.props;
        let toplam = 0;
        
        sepet.forEach(x => {
            let urun = Products.filter(y => { return y.id === x.id });
            toplam += (urun[0].fiyat * x.count)
        });

        return toplam;
    }

    render() {
        let { sepet } = this.props; 
        return (
            <ul className="list-group">
                {
                    sepet.map(this.Listele)
                }
                <h1 className="mt-4">Toplam : {this.toplamHesapla().toFixed(2)} TL </h1>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    sepet: state.sepet
});

export default connect(mapStateToProps)(Sepetim);