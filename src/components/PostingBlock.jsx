import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { connect } from "react-redux";
import SeparationLine from "./SeparationLine";
import { actAddNewRequest } from "../actions";

import blue_paw from "../img/paw.png";
import avatar from "../img/user-avatar-sample.png";

class PostingBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      photos: "",
      isBlocking: false
    };
  }

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
      isBlocking: value.length > 0
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { message, photos } = this.state;
    const bodyFormData = new FormData();
    bodyFormData.set("body", message);
    bodyFormData.append("photos", photos);
    if (message.length > 0) {
      this.props.onAddNew(bodyFormData);
      this.setState({
        message: "",
        photos: "",
        isBlocking: false
      });
    }
  };
  render() {
    const { isBlocking } = this.state;
    return (
      <div className="news__post-container u-margin-bottom-big">
        <div className="news__post-container--header">
          <p className="news__post-container--header--paragraph">
            Tạo bài viết
          </p>
        </div>
        <Prompt
          when={isBlocking}
          message={location => `Bạn muốn chuyển trang đến ${location.pathname}`}
        />
        <div className="news__post-container--body">
          <img
            src={avatar}
            alt="user-avatar"
            className="news__post-container--body--avatar"
          />

          <div className="news__post-container--body--sprout">
            <textarea
              className="news__post-container--body--content"
              name="message"
              placeholder="Bạn đang nghĩ gì?"
              value={this.state.message}
              onChange={this.onChange}
            />
          </div>

          <button
            className="btn__action btn__action--post"
            onClick={this.onSubmit}
          >
            Đăng
            <img
              src={blue_paw}
              alt="paw_icon"
              className="btn__action--paw--post"
            />
          </button>
        </div>

        <SeparationLine
          position="relative"
          bottom="12rem"
          opacity=".2"
          margin="0 5rem"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddNew: data => {
      dispatch(actAddNewRequest(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostingBlock);
