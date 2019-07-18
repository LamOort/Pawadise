import React, { Component } from 'react';
import storeDetailHeader_sampleImg from '../../img/shopDetail-header-sample.png'
import storeAvatar_sample from '../../img/storeDetail-descriptionIMG-sample.png';

class StoreDetailHeader extends Component {
    render() {
        const {info} = this.props;
        return (
            <div className="store__header">
                <img src={`/${info.avatar}`} alt="shopHeader" className="store__header--img"/>
            
                <div className="store__header--title">
                    <img src={`/${info.avatar}`} alt="store avatar" className="store__header--avatar"/>

                    <p className="store__header--storeName">{info.name} {/*cái này sửa thành tên shop get từ DB */}</p>
                </div>
            </div>
            
        );
    }
}

export default StoreDetailHeader;