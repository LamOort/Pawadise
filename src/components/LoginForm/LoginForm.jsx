import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccount: true,
      username: "",
      email: "",
      password: "",
      name: ""
    };
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onHandleLogin = e => {
    e.preventDefault();
    var { username, password } = this.state;
    var { closePopup, onLogin } = this.props;
    axios
      .post("http://localhost:3000/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        
        if (res.status === 202) {
          onLogin(res.data.user);
          closePopup();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onHandleRegister = e => {
    e.preventDefault();
    var { username, email, password, name } = this.state;
    axios
      .post("http://localhost:3000/register", {
        name: name,
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        if (res.status === 201) {
          this.setState({
            isAccount: true
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    var { isAccount } = this.state;
    var title = isAccount ? "đăng nhập" : "đăng ký";
    return (
      <div className="popup">
        <div className="popup_inner">
          <h3>{title}</h3>
          <div className="input-container">
            <i className="fa fa-user icon" />
            <input
              className="input-field"
              type="text"
              placeholder="Tên đăng nhập"
              onChange={this.onChange}
              name="username"
              required
            />
          </div>

          {!isAccount ? (
            <div className="input-container">
              <i className="fa fa-envelope icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                onChange={this.onChange}
                name="email"
                required
              />
            </div>
          ) : null}

          <div className="input-container">
            <i className="fa fa-key icon" />
            <input
              className="input-field"
              type="password"
              placeholder="Mật khẩu"
              onChange={this.onChange}
              name="password"
              required
            />
          </div>

          {!isAccount ? (
            <div className="input-container">
              <i className="fa fa-key icon" />
              <input
                className="input-field"
                type="text"
                placeholder="Họ và tên"
                onChange={this.onChange}
                name="name"
                required
              />
            </div>
          ) : null}

          {isAccount ? (
            <button type="submit" className="btn" onClick={this.onHandleLogin}>
              Đăng nhập
            </button>
          ) : (
            <button
              type="submit"
              className="btn"
              onClick={this.onHandleRegister}
            >
              Đăng ký
            </button>
          )}
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          {isAccount ? (
            <p>
              Bạn chưa có tài khoản?
              <a
                href="#"
                onClick={() => {
                  this.setState({ isAccount: false });
                }}
              >
                Đăng ký ngay
              </a>
              .
            </p>
          ) : (
            <p>
              Bạn đã có tài khoản?{" "}
              <a
                href="#"
                onClick={() => {
                  this.setState({ isAccount: true });
                }}
              >
                Đăng nhập
              </a>
              .
            </p>
          )}
          <button className="close" onClick={this.props.closePopup}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;