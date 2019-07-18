import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

import full_bg from "../../img/bg-full.png";
import shop_img from "../../img/shop.png";
import blue_paw from "../../img/paw.png";

const ListItem = ({ service }) => {
  return (
    <div className="info--service">
      <img src={shop_img} alt="shopPhoto" className="info--image" />
      <div className="info__text-container">
        <div className="info__text-container--title">{service.name}</div>
        <div className="info__text-container--address">
          Địa chỉ: {service.address}
        </div>
      </div>

      <button className="btn__action">
        Review
        <img src={blue_paw} alt="paw_icon" className="btn__action--paw" />
      </button>
    </div>
  );
};
class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }
  componentWillMount() {
    callApi("service", "GET", null).then(res => {
      console.log(res);
      this.setState({
        services: res.data
      });
    });
  }
  render() {
    const { services } = this.state;
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--service" />

        <section className="section-serviceList">
          <div className="container--service">
            <div className="box--service">
              {services.map(service => (
                <Link to={`services/${service._id}`} key={service._id}>
                  <ListItem service={service} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ServicePage;
