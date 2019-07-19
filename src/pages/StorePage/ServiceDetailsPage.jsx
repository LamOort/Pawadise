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
      info: {},
      photos: [],
      description: []
    };
  }
  componentDidMount() {
    const { match } = this.props;
    callApi(`stores/${match.params.slug}`).then(res => {
      this.setState({
        info: res.data,
        photos: res.data.photos,
        description: res.data.description
      });
    });
  }
  render() {
    const { info,photos,description } = this.state;

    return (
      <div>
        <StoreDetailHeader info={info} photos={photos[0]}/>
        <StoreDetailDescription info={info} description={description}/>

        <p className="store__big-title">Hình ảnh</p>
                
                <div className="store__product--sprout">
                   <StoreDetailImage img= {sample} />

                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   <StoreDetailImage img= {sample} />
                   
                </div>

      </div>
    );
  }
}

export default ServiceDetailsPage;
