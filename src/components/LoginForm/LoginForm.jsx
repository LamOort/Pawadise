import React, { Component } from "react";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import callApi from "../../utils/callApi";

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
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onHandleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { closePopup,loggedIn } = this.props;
    callApi("login", "POST", {
      username: username,
      password: password
    }).then(res => {
      if (res.status === 202) {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        loggedIn();
        closePopup();
      }
    });
  };

  onHandleRegister = e => {
    e.preventDefault();
    const { username, email, password, name } = this.state;
    callApi("register", "POST", {
      name: name,
      username: username,
      email: email,
      password: password
    }).then(res => {
      if (res.status === 201) {
        this.setState({
          isAccount: true
        });
      }
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
          <button
            type="submit"
            className="login__btn"
            onClick={this.onHandleLogin}
          >
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
