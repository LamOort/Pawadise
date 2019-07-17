import React, { Component } from 'react';

class StoreDetailProductCard extends Component {
    render() {
        return(
            <div className="store__product--card">
                <img src={this.props.img} alt="" className="store__product--card--img"/>

                <p className="store__product--card--productName">
                {this.props.productName}
                </p>

                <p className="store__product--card--price">
                    {this.props.price}
                </p>
            </div>
        );
    }
}

export default StoreDetailProductCard;