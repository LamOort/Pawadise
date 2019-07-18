import React, { Component } from "react";

class StoreDetailProductCard extends Component {
  render() {
    const { img, productName, price } = this.props;
    return (
      <div className="store__product--card">
        <img src={img} alt="" className="store__product--card--img" />

        <p className="store__product--card--productName">{productName}</p>

        <p className="store__product--card--price">{price}</p>
      </div>
    );
  }
}

export default StoreDetailProductCard;
