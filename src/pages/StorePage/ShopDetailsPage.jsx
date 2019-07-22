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
      info: {},
      photos: {},
      description: []
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
        info: res.data,
        photos: res.data.photos,
        description: res.data.description
      });
    });
  }
  render() {
    const { products, info, photos, description } = this.state;

    return (
      <div>
        <StoreDetailHeader info={info} photos={photos[0]} />
        <StoreDetailDescription info={info} description={description} />

        <p className="store__big-title">Sản Phẩm</p>

        <div className="store__product--sprout">
          {products.map((product, index) => (
            <StoreDetailProductCard
              key={index}
              img={`https://pawadise.s3.ap-east-1.amazonaws.com/${product.image}`}
              productName={product.name}
              price={`${product.price} VND`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopDetailsPage;
