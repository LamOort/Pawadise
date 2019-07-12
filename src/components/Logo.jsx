import React, { Component } from 'react';
import mainLogo from'../img/logo-big.png';

class Logo extends Component {
    render() {
        return (
            <div className="header__logo-box">
                <img src={mainLogo} alt="Logo"/>
            </div>
        );
    }
}

export default Logo;