import React, { Component } from 'react';
import StoreDetailHeader from './StoreDetailHeader';
import StoreDetailDescription from './StoreDetailDescription';

import sample from '../../img/background-2.jpg';

class ServiceDetailsPage extends Component {
    render() {
        return (
            <div>
                <StoreDetailHeader/>
                <StoreDetailDescription/>

                <p className="store__big-title">Sản Phẩm</p>
                
                <div className="store__product--sprout">
                   <StoreDetailImage img= {sample} />
                </div>
            </div>
        );
    }
}

export default ServiceDetailsPage;