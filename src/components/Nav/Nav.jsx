import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu} from 'react-burger-menu';

class Nav extends Component {
    render() {
        return (
            <Menu right >
                <Link to="/" style={{textDecoration: 'none', color:'#fff'}} className="menu-item navigation__link">Trang chủ</Link>
                <Link to="/news" style={{textDecoration: 'none', color:'#fff'}}  className="menu-item navigation__link">Tin tức</Link>
                <Link to="/shop" style={{textDecoration: 'none', color:'#fff'}}  className="menu-item navigation__link">Cửa hàng</Link>
                <Link to="/service" style={{textDecoration: 'none', color:'#fff'}}  className="menu-item navigation__link">Dịch vụ</Link>
                <Link to="/gallery" style={{textDecoration: 'none', color:'#fff'}}  className="menu-item navigation__link">Kho ảnh</Link>
                <Link to="/contact" style={{textDecoration: 'none', color:'#fff'}}  className="menu-item navigation__link">Liên hệ</Link>
            </Menu>
        );
    }
}

export default Nav;