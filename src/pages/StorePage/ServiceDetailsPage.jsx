import React, { Component } from 'react';
import callApi from '../../utils/callApi';

class ServiceDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: []
        };
      }
      componentDidMount() {
        const { match } = this.props;
        callApi(`stores/${match.params.slug}/product`).then(res => {
          this.setState({
            products: res.data
          });
        });
      }
      render() {
        const { products } = this.state;
        return (
          <div>
            {products.map((product, index) => (
              <div key={index}>
                <h1>{product.name}</h1>
                <h1>{product.image}</h1>
                <h1>{product.price}</h1>
              </div>
            ))}
          </div>
        );
     }
}

export default ServiceDetailsPage;