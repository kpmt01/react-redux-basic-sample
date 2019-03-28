import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
    sepeteEkle = (id) => {
        this.props.dispatch({ type: 'sepeteEkle', id: id });
    }

    render() {
        let { data, sepet } = this.props
        let sepetAdet = sepet.filter(x => x.id === data.id);
        sepetAdet = sepetAdet.length > 0 ? sepetAdet[0].count : 0;
        return (
            <li className="list-group-item d-flex flex-row">
                {data.isim}
                <span className="ml-auto">{data.fiyat.toFixed(2)} TL x {data.stok - sepetAdet}</span>
                <button className={"btn btn-sm btn-success ml-3 " + ((sepetAdet < data.stok) ? '' : 'disabled') } onClick={() => { if (sepetAdet < data.stok) { this.sepeteEkle(data.id) } }}>EKLE</button>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    sepet: state.sepet
});

export default connect(mapStateToProps)(Product);