import React, { Component } from 'react';
import { connect } from 'react-redux';

class Extra extends Component {
    arttir = () => {
        this.props.dispatch({ type: 'arttir' });
    }

    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-10 border-top pt-5 text-center">
                <button className="btn btn-sm btn-danger" onClick={this.arttir}> + </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sayi: state.sayi
});

export default connect(mapStateToProps)(Extra);