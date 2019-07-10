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
    var title = isAccount ? "Đăng nhập" : "Đăng ký";
    return (
      <div className="login">
          <div className="login__title">{title}</div>
          <div className="login__text-container">
            <div className="login__attribute">Tên đăng nhập</div>
            <div className="login__text-field">
              <input
                className="login__input"
                type="text"
                placeholder="Tên đăng nhập"
                onChange={this.onChange}
                name="username"
                required
              />
            </div>
          </div>

          <div className="login__text-container">
            <div className="login__attribute">Mật khẩu</div>
            <div className="login__text-field">
              <input
                className="login__input"
                type="password"
                placeholder="Mật khẩu"
                onChange={this.onChange}
                name="password"
                required
              />
            </div>
          </div>

          {!isAccount ? (
            <div className="login__text-container">
              <div className="login__attribute">Email</div>
                <div className="login__text-field">
                  <input
                    className="login__input"
                    type="text"
                    placeholder="Email"
                    onChange={this.onChange}
                    name="email"
                    required
                  />
                </div>
            </div>
          ) : null}

          

          {!isAccount ? (
            <div className="login__text-container">
              <div className="login__attribute">Họ và tên</div>
                <div className="login__text-field">
                  <input
                    className="login__input"
                    type="text"
                  placeholder="Họ tên"
                  onChange={this.onChange}
                  name="name"
                  required
                  />
                </div>
            </div>
          ) : null}

          {isAccount ? (
            <button type="submit" className="login__btn" onClick={this.onHandleLogin}>
              Đăng nhập
            </button>
          ) : (
            <button
              type="submit"
              className="login__btn"
              onClick={this.onHandleRegister}
            >
              Đăng ký
            </button>
          )}
          <label className="login__remember">
            <input type="checkbox" name="remember" /> Nhớ tài khoản
          </label>
          {isAccount ? (
            <p className="login__suggestion">
              Bạn chưa có tài khoản? &nbsp;
              <a
                href="#"
                onClick={() => {
                  this.setState({ isAccount: false });
                }}
              >
                Đăng ký ngay.
              </a>
            </p>
          ) : (
            <p className="login__suggestion">
              Bạn đã có tài khoản? &nbsp;
              <a
                href="#"
                onClick={() => {
                  this.setState({ isAccount: true });
                }}
              >
                Đăng nhập.
              </a>
            </p>
          )}
          <button className="login__close" onClick={this.props.closePopup}>
            &times;
          </button>
      </div>
    );
  }
}

export default LoginForm;