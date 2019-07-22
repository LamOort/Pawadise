import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeparationLine from "../../components/SeparationLine";
import PostingBlock from "../../components/PostingBlock";
import { connect } from "react-redux";
import {
  actGetAllNewsRequest,
  actAddCommentsRequest,
  actLikeRequest
} from "../../actions/index";

import full_bg from "../../img/bg-full.png";
import avatar from "../../img/user-avatar-sample.png";
import postedImg from "../../img/img-posted-sample.png";
import likeIcon from "../../img/like-icon.svg";
import commentIcon from "../../img/comment-icon.svg";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesQuantity: 0,
      updated: false,
      comment: ""
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

  isLike = id => {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.props.isLike(id);
    } else {
      alert("Bạn cần phải đăng nhập để thực hiện chức năng này!!!");
    }
  };

  onComment = (id, comment) => {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      if (comment.length > 0) {
        this.props.onComment(id, comment);
        this.setState({
          comment: ""
        });
      }
    } else {
      alert("Bạn cần phải đăng nhập để thực hiện chức năng này!!!");
    }
  };

  componentDidMount() {
    this.props.getAllNews();
  }

  render() {
    const { news } = this.props;
    const { isAuthenticated, user } = this.props.auth;

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

              {item.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt="in post"
                  className="news__display--posted-image"
                />
              ))}

              <div className="news__display--like-comment-container">
                <div className="news__display--counter">
                  <img
                    src={likeIcon}
                    alt="in post"
                    className="news__display--like-count"
                  />

                  <p className="news__display--counterInNumLeft">
                    {item.likesQuantity}
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
                  onClick={() => this.isLike(item._id)}
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
                    <Link
                      className="news__display--userName"
                      to={`/profile/${cmt.commentsAuthor}`}
                    >
                      {cmt.authorName}
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
                    value={this.state.comment}
                    onChange={this.onChange}
                  />
                </div>

                <button
                  className="news__display--comment-action-button"
                  onClick={() => this.onComment(item._id, this.state.comment)}
                >
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
    },
    onComment: (id, comment) => {
      dispatch(actAddCommentsRequest(id, comment));
    },
    isLike: id => {
      dispatch(actLikeRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
