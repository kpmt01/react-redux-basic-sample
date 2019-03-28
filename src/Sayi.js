import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sayi extends Component {

  azalt = () => {
    this.props.dispatch({ type: 'azalt' });
  }

  arttir = () => {
    this.props.dispatch({ type: 'arttir' });
  }

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-10 border mb-5 py-3">
        <h2 className="text-center">Sayalım</h2>
        <div className="row justify-content-around align-items-center">
          <button className="btn btn-sm btn-danger" onClick={this.azalt}> - </button>
          <span>{this.props.sayi}</span>
          <button className="btn btn-sm btn-danger" onClick={this.arttir}> + </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sayi: state.sayi
});

export default connect(mapStateToProps)(Sayi);
