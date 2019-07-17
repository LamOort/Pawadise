import React, { Component } from 'react';
import SeparationLine from '../../components/SeparationLine';


class StoreDetailDescription extends Component {
    render() {
        return (
            <div className="store__description">
                <div className="store__description--general">
                    <div className="store__description--general--left">
                        <p className="store__description--attribute">
                            SĐT
                        </p>

                        <p className="store__description--attribute">
                           Giờ mở cửa  
                        </p>

                        <p className="store__description--attribute">
                            Đánh giá
                        </p>
                    </div>

                    <div className="store__description--general--right">
                        <p className="store__description--value">
                            12312930123
                        </p>

                        <p className="store__description--value">
                           8:00 - 21:00
                        </p>

                        <p className="store__description--value">
                            5/5
                        </p>
                    </div>
                </div>

                <div className="store__description--paragraph">
                    <p className="store__description--intro">
                        Giới thiệu   
                    </p>

                    <SeparationLine position="absolute" bottom="80%" opacity=".2" margin="0 0" width="100%" />

                    <div className="store__description--list">
                        <li>Nhiều sản phẩm dành cho mèo chó</li>
                        <li>Nhiều chương trình ưu đãi và giảm giá</li>
                        <li>Sản phẩm chất lượng và nguồn gốc rõ ràng</li>
                        <li>Hỗ trợ giao hàng ngoại tỉnh</li>
                        <li>Nhân viên nhiệt tình vui vẻ</li>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreDetailDescription;