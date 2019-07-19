import React, { Component } from "react";
import StoreDetailHeader from "./StoreDetailHeader";
import StoreDetailDescription from "./StoreDetailDescription";
import StoreDetailProductCard from "./StoreDetailProductCard";

import callApi from "../../utils/callApi";

class ShopDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      info: {}
    };
  }
  componentDidMount() {
    const { match } = this.props;
    callApi(`stores/${match.params.slug}/product`).then(res => {
      this.setState({
        products: res.data
      });
    });
    callApi(`stores/${match.params.slug}`).then(res => {
      this.setState({
        info: res.data
      });
    });
  }
  render() {
    const { products, info } = this.state;
    console.log(info);

    return (
      <div>
        <StoreDetailHeader info={info} />
        <StoreDetailDescription info={info} />

        <p className="store__big-title">Sản Phẩm</p>

        <div className="store__product--sprout">
          {products.map((product, index) => (
            <StoreDetailProductCard
              key={index}
              img={`/${product.image}`}
              productName={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopDetailsPage;
