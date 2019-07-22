import React, { Component } from "react";
import callApi from "../../utils/callApi";
import full_bg from "../../img/bg-full.png";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      phone: "",
      content: ""
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

  onContact = e => {
    e.preventDefault();
    const { name, email, title, phone, content } = this.state;
    const data = {
      name: name,
      email: email,
      title: title,
      phone: phone,
      content: content
    };
    callApi("contact", "POST", data).then(res => {
      alert("Thông tin đã được gửi đến chúng tôi !!!");
      this.setState({
        name: "",
        email: "",
        title: "",
        phone: "",
        content: ""
      });
    });
  };

  render() {
    const { name, email, title, phone, content } = this.state;
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--contact" />
        <div className="contact">
          <h2 className="contact__title">
            Bạn cần giúp đỡ? Liên lạc ngay với chúng tôi
          </h2>

          <form method="post" action="#" className="contact__form">
            <div className="contact__left">
              <label className="contact__label " for="name">
                Tên
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Tên bạn"
                  value={name}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" for="email">
                Email
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" for="title">
                Tiêu đề
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Tiêu đề"
                  value={title}
                  onChange={this.onChange}
                  required
                />
              </div>

              <label className="contact__label" for="phone">
                Điện thoại
              </label>
              <div className="contact__text-field u-margin-bottom-small">
                <input
                  className="contact__input"
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Điện thoại"
                  value={phone}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div className="contact__right">
              <label className="contact__right--title contact__label u-margin-bottom-small">
                Nội dung
              </label>
              <div className="contact__right--text-area">
                <textarea
                  className="contact__right--text-area-input"
                  name="content"
                  placeholder="Nội dung"
                  value={content}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div className="contact__submit">
              <input
                className="contact__submit--btn"
                type="submit"
                value="Gửi"
                onClick={this.onContact}
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default ContactPage;
