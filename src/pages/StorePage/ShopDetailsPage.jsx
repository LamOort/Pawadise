import React, { Component } from 'react';
import StoreDetailHeader from './StoreDetailHeader';
import StoreDetailDescription from './StoreDetailDescription';
import StoreDetailProductCard from './StoreDetailProductCard';

import productImg_sample from '../../img/product-img-sample.png';

class ShopDetailsPage extends Component {
    render() {
        return (
            <div>
                <StoreDetailHeader/>
                <StoreDetailDescription/>

                <p className="store__big-title">Sản Phẩm</p>
                
                <div className="store__product--sprout">
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`} price={`200.000`} />
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>
                    <StoreDetailProductCard img={productImg_sample} productName={`Đồ ăn dành cho thú cưng`}  price={`200.000`}/>


                </div>
            </div>
        );
    }
}

export default ShopDetailsPage;