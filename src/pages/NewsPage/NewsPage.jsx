import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeparationLine from "../../components/SeparationLine";
import PostingBlock from "../../components/PostingBlock";
import { connect } from "react-redux";
import { actGetAllNewsRequest } from "../../actions/index";

import full_bg from "../../img/bg-full.png";
import avatar from "../../img/user-avatar-sample.png";
import postedImg from "../../img/img-posted-sample.png";
import likeIcon from "../../img/like-icon.svg";
import commentIcon from "../../img/comment-icon.svg";
import callApi from "../../utils/callApi";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesQuantity: 0,
      updated: false
    };
  }
  isLike = item => {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      callApi(`posts/${item._id}/like`, "POST", null).then(res => {
        if (!this.state.updated) {
          this.setState({
            likesQuantity: res.data.likesQuantity,
            updated: true
          });
        } else {
          this.setState({
            likesQuantity: item.likesQuantity - 1,
            updated: false
          });
        }
      });
    } else {
      alert("Bạn cần phải đăng nhập để thực hiện chức năng này!!!");
    }
  };
  componentDidMount() {
    this.props.getAllNews();
  }
  render() {
    const { news } = this.props;
    const { isAuthenticated } = this.props.auth;
    // const { likesQuantity } = this.state;
    return (
      <main>
        <img src={full_bg} alt="full-bg" className="bg" />
        <header className="header--news" />

        <section className="news">
          {isAuthenticated ? <PostingBlock /> : null}

          {news.map(item => (
            <div className="news__display--container" key={item._id}>
              <img
                src={avatar}
                alt="user-avatar"
                className="news__display--avatar"
              />

              <div className="news__display--owner">{item.authorName}</div>

              <div className="news__display--dateTime">{item.date}</div>

              <div className="news__display--content">{item.body}</div>

              <img
                src={postedImg}
                alt="in post"
                className="news__display--posted-image"
              />

              <div className="news__display--like-comment-container">
                <div className="news__display--counter">
                  <img
                    src={likeIcon}
                    alt="in post"
                    className="news__display--like-count"
                  />

                  <p className="news__display--counterInNumLeft">
                    {item.likesQuantity > 0
                      ? item.likesQuantity
                      : this.state.likesQuantity}
                  </p>
                </div>

                <div className="news__display--counter">
                  <img
                    src={commentIcon}
                    alt="in post"
                    className="news__display--comment-count"
                  />

                  <p className="news__display--counterInNumRight">
                    {item.comments.length}
                  </p>
                </div>
              </div>

              <SeparationLine
                position="relative"
                bottom="5"
                opacity=".2"
                margin="0 3rem"
              />

              <div className="news__display--like-comment-button">
                <button
                  className="news__display--like-button"
                  onClick={() => this.isLike(item)}
                >
                  <img src={likeIcon} alt="like button" />
                </button>

                <button className="news__display--comment-button">
                  <img src={commentIcon} alt="comment button" />
                </button>
              </div>

              <SeparationLine
                position="relative"
                bottom="2rem"
                opacity=".2"
                margin="0"
              />

              {item.comments.map(cmt => (
                <div className="news__display--comment-sprout" key={cmt._id}>
                  <img
                    src={avatar}
                    alt="user-avatar"
                    className="news__display--avatar news__display--avatar-small  "
                  />

                  <div className="news__display--comment-content">
                    <Link className="news__display--userName">
                      {cmt.commentsAuthor}
                    </Link>

                    <p className="news__display--comment-text">{cmt.body}</p>
                  </div>
                </div>
              ))}
              <SeparationLine
                position="relative"
                bottom="2rem"
                opacity=".2"
                margin="0"
              />

              <div className="news__display--comment-action-box">
                <img
                  src={avatar}
                  alt="user-avatar"
                  className="news__display--avatar news__display--avatar-small  "
                />

                <div className="news__display--comment-input-sprout">
                  <input
                    className="news__display--comment-input-box"
                    type="text"
                    name="comment"
                  />
                </div>

                <button className="news__display--comment-action-button">
                  Bình luận
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    news: state.news
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllNews: () => {
      dispatch(actGetAllNewsRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
