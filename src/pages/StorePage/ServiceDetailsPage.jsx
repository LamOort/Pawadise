import React, { Component } from "react";
import callApi from "../../utils/callApi";
import StoreDetailHeader from "./StoreDetailHeader";
import StoreDetailDescription from "./StoreDetailDescription";
import StoreDetailImage from "./StoreDetailImage";

import sample from '../../img/background-2.jpg';


class ServiceDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    const { match } = this.props;
    callApi(`stores/${match.params.slug}`).then(res => {
      this.setState({
        info: res.data
      });
    });
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <StoreDetailHeader info={info} />
        <StoreDetailDescription info={info} />

        <p className="store__big-title">Hình ảnh</p>
                
                <div className="store__product--sprout">
                   <StoreDetailImage img= {sample} />
                </div>
      </div>
    );
  }
}

export default ServiceDetailsPage;
