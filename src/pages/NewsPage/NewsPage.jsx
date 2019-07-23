import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeparationLine from "../../components/SeparationLine";
import PostingBlock from "../../components/PostingBlock";
import { connect } from "react-redux";
import {
  actGetAllNewsRequest,
  actAddCommentsRequest,
  actLikeRequest,
  actDeleteNewRequest
} from "../../actions/index";

import full_bg from "../../img/bg-full.png";
import avatar from "../../img/user-avatar-sample.png";
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

  onDeleteNew = id => {
    this.props.onDeleteNew(id);
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
            <div>
              <div className="news__display--container" key={item._id}>
                <div className="news__display-rounder">
                  <div className="news__display-topSpace" />

                  <div>
                    <div className="news__display--header">
                      <img
                        src={avatar}
                        alt="user-avatar"
                        className="news__display--avatar"
                      />

                      <div className="news__display-owner_wrapper">
                        <div className="news__display--owner">
                          {item.authorName}
                        </div>

                        <div className="news__display--dateTime">
                          {item.date}
                        </div>
                      </div>
                    </div>

                    <div className="news__display--content">
                      <p>
                        {item.body}
                        {/* {user._id === item.author ? (
                            <button onClick={() => this.onDeleteNew(item._id)}>
                              Xóa
                            </button>
                          ) : (
                            ""
                          )} */}
                      </p>
                    </div>

                    {item.photos.map((photo, index) => (
                      <div className="news__display--posted-image_sprout">
                        <img
                          key={index}
                          src={`http://pawadise.cf:3000/${photo}`}
                          alt="in post"
                          className="news__display--posted-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="news__display-seperator">
                  <div className="news__display-like_comment_display">
                    <div>
                      <div className="news__display--like-comment-container">
                        <div className="news__display--like-comment-smaller_sprout">
                          <div className="news__display--like_counter">
                            <span className="news__display--like-count">
                              <img src={likeIcon} alt="in post" />
                            </span>

                            <div className="news__display--counter_block">
                              <span className="news__display--like_counter_inNum">
                                <span className="">
                                  {item.likesQuantity > 0
                                    ? item.likesQuantity
                                    : this.state.likesQuantity}
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className="news__display--empty_div" />

                          <div className="news__display--comment_counter">
                            <span>
                              <span className="news__display--comment_count_inNum">
                                {item.comments.length}
                              </span>
                              <img src={commentIcon} alt="in post" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="news__display--like-comment-button">
                        <div className="news__display-button_smaller_wrapper">
                          <span className="news__display-button_container">
                            <div className="news__display-button--left_wrapper">
                              <div>
                                <button
                                  className="news__display--like-button"
                                  onClick={() => this.isLike(item._id)}
                                >
                                  <img
                                    src={likeIcon}
                                    alt="like button"
                                    className="news__display--like-button_icon"
                                  />
                                  &nbsp;Thích
                                </button>
                              </div>
                            </div>
                          </span>

                          <div className="news__display-button_container">
                            <button className="news__display--comment-button">
                              Bình luận
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {item.comments.map(cmt => (
                    <div
                      className="news__display--comment-sprout"
                      key={cmt._id}
                    >
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

                        <p className="news__display--comment-text">
                          {cmt.body}
                        </p>
                      </div>
                    </div>
                  ))}

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
                      onClick={() =>
                        this.onComment(item._id, this.state.comment)
                      }
                    >
                      Bình luận
                    </button>
                  </div>
                </div>
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
    },
    onDeleteNew: id => {
      dispatch(actDeleteNewRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
