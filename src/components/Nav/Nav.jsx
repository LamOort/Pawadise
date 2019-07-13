import { Link } from "react-router-dom";
import decode from "jwt-decode";
import callApi from "../../utils/callApi";
import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import nav_img from "../../img/nav-img-small.png";

const navImgStyle = {
  position: "fixed",
  bottom: "0rem",
  right: "4.5rem"
};

const Welcome = ({ user, onLogout }) => {
  return(
    <li style={{ listStyleType: "none" }} className="navigation__welcome">
        <a
          href="#"
          style={{ textDecoration: "none" }}
          className="dropdown-toggle menu-item navigation__user"
          data-toggle="dropdown"
        >
          {user.name}
        </a>
        <ul className="dropdown-menu">
          <li style={{ listStyleType: "none" }}>
            <Link 
            style={{ textDecoration: "none" }} className="navigation__user--attribute" 
            to={`/profile/${user.username}`}>&bull; Trang cá nhân</Link>
          </li>

          <li style={{ listStyleType: "none" }}>
            <Link 
            style={{ textDecoration: "none" }}
            className="navigation__user--attribute" 
            to="/" 
            onClick={onLogout}>
              &bull; Đăng xuất
            </Link>
          </li>
        </ul>
      </li>
  );
};
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null};
  }

  onLogout = () => {
    callApi("logout", "GET", null)
      .then(res => {
        localStorage.removeItem("jwtToken");
        this.setState({
          user: null
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      callApi(`users/${decode(token)._id}`, "GET", null).then(res => {
        this.setState({
          user: res.data
        });
      });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <Menu right>
        {user !== null ? (
          <Welcome user={user} onLogout={this.onLogout} />
        ) : null}
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Trang chủ
        </Link>
        <Link
          to="/news"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Tin tức
        </Link>
        <Link
          to="/shop"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Cửa hàng
        </Link>
        <Link
          to="/service"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Dịch vụ
        </Link>
        <Link
          to="/gallery"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Kho ảnh
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          &diams; Liên hệ
        </Link>

        <img
          src={nav_img}
          alt="nav-img"
          className="bm-img"
          style={navImgStyle}
        />
      </Menu>
    );
  }
}

export default Nav;
