import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

import full_bg from "../../img/bg-full.png";
import shop_img from "../../img/shop.png";
import blue_paw from "../../img/paw.png";

const ListItem = ({shop}) => {
  return (
    <div className="info--shop">
      <img src={shop_img} alt="shopPhoto" className="info--image" />
      <div className="info__text-container">
        <p className="info__text-container--title">{shop.name}</p>
        <p className="info__text-container--address">Địa chỉ: {shop.address}</p>
      </div>

      <button className="btn__action">
        Đánh giá
        <img src={blue_paw} alt="paw_icon" className="btn__action--paw" />
      </button>
    </div>
  );
};
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }
  componentWillMount() {
    callApi("shop", "GET", null).then(res => {
      console.log(res);
      this.setState({
        shops: res.data
      });
    });
  }
  render() {
    const { shops } = this.state;
    const result = shops.map(shop => {
      return (
        <Link to={`stores/${shop._id}`} key={shop._id}>
          <ListItem shop={shop}/>
        </Link>
      );
    });
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--shop" />

        <section className="section-shopList">
          <div className="container--shop">
            <div className="box--shop">{result}</div>
          </div>
        </section>
      </main>
    );
  }
}

export default ShopPage;
