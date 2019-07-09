import React, { Component } from 'react';
import smallLogo from'../../img/logo-small.png';
import mainLogo from'../../img/logo-big.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__left">
                    <img src={smallLogo} alt="small logo" className="footer__left--logo-small"/>
                    <img src={mainLogo} alt="main logo" className="footer__left--logo-big"/>
                </div>

                <div className="footer__right">

                    <div className="footer__icon"><i className="fas fa-map-marker-alt fa-fw fa-2x"></i>&nbsp;  
                        <a className="footer__link footer__link--unclickable" href>70 Phan Thanh, Đà Nẵng</a>
                    </div>
                    <div className="footer__icon"><i className="fas fa-phone-square-alt fa-fw fa-2x"></i>&nbsp; 
                        <a className="footer__link footer__link--unclickable" href>+123 456789</a>
                    </div>
                    <div className="footer__icon"><i className="fas fa-envelope-square fa-fw fa-2x"></i>&nbsp; 
                        <a className="footer__link footer__link--clickable" href="mailto:pawadise.vn@gmail.com?subject=">pawadise.vn@gmail.com</a>
                    </div>
                    <div className="footer__icon"><i className="fab fa-facebook-square fa-fw fa-2x"></i>&nbsp; 
                        <a className="footer__link " href="https://www.facebook.com/pawadisevn/" target="_blank" rel="noopener noreferrer"><span className="footer__link--clickable">fb.com/pawadisevn</span></a>
                    </div>

                </div>

		</footer>
        );
    }
}

export default Footer;