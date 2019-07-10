import React, { Component } from "react";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import decode from 'jwt-decode';
import callApi from '../../utils/callApi';

const Welcome = ({ user, onLogout }) => {
  return (
    <li className="dropdown">
      <a
        href="#"
        style={{ textDecoration: "none", color: "#fff" }}
        className="dropdown-toggle menu-item navigation__link"
        data-toggle="dropdown"
      >
        {user.name}
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to={`/profile/${user.username}`}>Profiles</Link>
        </li>
        <li />
        <li>
          <Link to="/" onClick={onLogout}>
            Sign out
          </Link>
        </li>
      </ul>
    </li>
  );
};
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

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

  onLogout = () => {
    callApi("logout", "GET", null)
      .then(res => {
        this.setState({
          user: null
        });
        localStorage.removeItem("jwtToken");
      })
      .catch(err => {
        console.log(err);
      });
  };

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
          Trang chủ
        </Link>
        <Link
          to="/news"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          Tin tức
        </Link>
        <Link
          to="/shop"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          Cửa hàng
        </Link>
        <Link
          to="/service"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          Dịch vụ
        </Link>
        <Link
          to="/gallery"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          Kho ảnh
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#fff" }}
          className="menu-item navigation__link"
        >
          Liên hệ
        </Link>
      </Menu>
    );
  }
}

export default Nav;
