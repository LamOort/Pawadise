import React, { Component } from 'react';
import full_bg from'../../img/bg-full.png';
import shop_img from'../../img/shop.png';
import blue_paw from '../../img/paw.png'

class ShopPage extends Component {
    render() {
        return (
            <main>
                <img src={full_bg} alt="full-bg" className="bg"/>
                <header className="header--shop"/>
                
                <section className="section-shopList">
                    <div className="container--shop">
                        <div className="box--shop">
                            <div className="info--shop">
                                <img src={shop_img} alt="shopPhoto" className="info--image"/>
                                <div className="info__text-container">
                                    <div className="info__text-container--title">K-pet Mart</div>
                                    <div className="info__text-container--address">Địa chỉ: Phan Thanh</div>
                                </div>
                                
                                <button className="btn__review">Review<img src={blue_paw} alt="paw_icon" className="btn__review--paw"/></button>
                            </div>

                            <div className="info--shop">
                                <img src={shop_img} alt="shopPhoto" className="info--image"/>
                                <div className="info__text-container">
                                    <div className="info__text-container--title">K-pet Mart</div>
                                    <div className="info__text-container--address">Địa chỉ: Phan Thanh</div>
                                </div>

                                <button className="btn__review">Review<img src={blue_paw} alt="paw_icon" className="btn__review--paw"/></button>
                            </div>

                            <div className="info--shop">
                                <img src={shop_img} alt="shopPhoto" className="info--image"/>
                                <div className="info__text-container">
                                    <div className="info__text-container--title">K-pet Mart</div>
                                    <div className="info__text-container--address">Địa chỉ: Phan Thanh</div>
                                </div>

                                <button className="btn__review">Review<img src={blue_paw} alt="paw_icon" className="btn__review--paw"/></button>
                            </div>

                            <div className="info--shop">
                                <img src={shop_img} alt="shopPhoto" className="info--image"/>
                                <div className="info__text-container">
                                    <div className="info__text-container--title">K-pet Mart</div>
                                    <div className="info__text-container--address">Địa chỉ: Phan Thanh</div>
                                </div>

                                <button className="btn__review">Review<img src={blue_paw} alt="paw_icon" className="btn__review--paw"/></button>
                            </div>

                            <div className="info--shop">
                                <img src={shop_img} alt="shopPhoto" className="info--image"/>
                                <div className="info__text-container">
                                    <div className="info__text-container--title">K-pet Mart</div>
                                    <div className="info__text-container--address">Địa chỉ: Phan Thanh</div>
                                </div>
                                <button className="btn__review">Review<img src={blue_paw} alt="paw_icon" className="btn__review--paw"/></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ShopPage;