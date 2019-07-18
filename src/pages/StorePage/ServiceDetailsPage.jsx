import React, { Component } from "react";
import callApi from "../../utils/callApi";
import StoreDetailHeader from "./StoreDetailHeader";
import StoreDetailDescription from "./StoreDetailDescription";

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
      </div>
    );
  }
}

export default ServiceDetailsPage;
