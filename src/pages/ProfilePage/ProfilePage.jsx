import React, { Component } from "react";
import { connect } from "react-redux";

import SeparationLine from "../../components/SeparationLine";
import { actEditProfileRequest } from "../../actions";
import full_bg from "../../img/bg-full.png";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      phone: "",
      avatar: "",
      address: {
        street: "",
        district: "",
        city: ""
      }
    };
  }

  componentDidMount() {
    
    if (this.props && this.props.auth && this.props.auth.user) {
      var { user } = this.props.auth;      
      this.setState({
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phoneNumber,
        avatar: user.avatar,
        address: user.address || {}
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.auth.user) {
      var { user } = nextProps.auth;      
      this.setState({
        name: user.name,
        email: user.email,
        age: user.age,
        phone: user.phoneNumber,
        avatar: user.avatar,
        address: user.address || {}
      });
    }
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    e.preventDefault();
    alert("Chỉnh sửa thông tin thành công ^-^");
    const { name, email, age, phone, avatar, address:{street,district,city} } = this.state;
    const user = {
      name: name,
      email: email,
      age: age,
      phone: phone,
      avatar: avatar,
      street: street,
      district: district,
      city: city
    };
    this.props.onUpdateProfile(user);
  };

  render() {
    // const { user } = this.props.auth;
    const { name, email, age, phone, avatar, address:{street,district,city} } = this.state;

    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--profile" />

        <section className="profile">
          <h2 className="profile__title">Thông tin cá nhân</h2>

          <SeparationLine
            position="relative"
            bottom="5"
            opacity=".2"
            margin="0 14rem"
          />

          <div className="profile__info-sprout">
            <div className="profile__info--text-container">
              <label className="profile__attribute">Tên</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Quý danh"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Tuổi</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn bao nhiêu nồi bánh chưng rồi"
                  name="age"
                  value={age}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Email</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Số điện thoại</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Giúp chúng tôi giữ liên lạc"
                  name="phoneNumber"
                  onChange={this.onChange}
                  value={phone}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Đường</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn nhà ở Đường nào ?"
                  name="street"
                  value={`${street}`}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Quận</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Nhà bạn ở Quận nào ?"
                  name="district"
                  value={`${district}`}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="profile__info--text-container">
              <label className="profile__attribute">Thành phố</label>

              <div className="profile__value-sprout">
                <input
                  className="profile__value"
                  type="text"
                  placeholder="Bạn ở Thành Phố nào ?"
                  name="city"
                  value={`${city}`}
                  onChange={this.onChange}
                />
              </div>
            </div>

          </div>

          <button className="profile__save-button" onClick={this.onSave}>
              Lưu
            </button>
          {/*<div
            style={{
              borderLeft: "1px solid #000",
              borderRight: "1px solid #000",
              height: "50rem",
              position: "absolute",
              right: "33%",
              top: "127%",
              opacity: ".2"
            }}
          />*/}
          <div className="profile__avatar-container">
            <img
              src={`http://pawadise.cf:3000/${avatar}`}
              alt="user avatar"
              className="profile__avatar"
            />
          </div>

          <input type="file" className="profile__change-avatar-button" />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateProfile: user => {
      dispatch(actEditProfileRequest(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
