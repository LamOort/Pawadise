import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SeparationLine from '../../components/SeparationLine';
import PostingBlock from '../../components/PostingBlock';

import full_bg from'../../img/bg-full.png';
import avatar from'../../img/user-avatar-sample.png';
import postedImg from'../../img/img-posted-sample.png';
import likeIcon from'../../img/like-icon.svg';
import commentIcon from'../../img/comment-icon.svg';



class NewsPage extends Component {
    render() {
        return (
            <main>
                <img src={full_bg} alt="full-bg" className="bg"/>
                <header className="header--news"/>

                <section className="news">
                    <PostingBlock/>

                    <div className="news__display--container">
                        <img src={avatar} alt="user-avatar"  className="news__display--avatar"/>

                        <div className="news__display--owner">K-Market</div>

                        <div className="news__display--dateTime">26 tháng 6 năm 2019</div>

                        <div className="news__display--content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto est, aut molestiae in veniam! Veritatis quibusdam et consequuntur ipsam similique? Pariatur eaque mollitia numquam accusantium tempora quibusdam quae fuga!
                        </div>

                        <img src={postedImg} alt="in post" className="news__display--posted-image"/>
                    
                        <div className="news__display--like-comment-container">

                        <div className="news__display--counter">
                            <img src={likeIcon} alt="in post" className="news__display--like-count"/>

                            <p className="news__display--counterInNumLeft">90</p>
                        </div>
                        
                        <div className="news__display--counter">
                            <img src={commentIcon} alt="in post" className="news__display--comment-count"/>

                            <p className="news__display--counterInNumRight">1024</p>
                        </div> 
                    </div>

                    <SeparationLine position="relative" bottom="5" opacity=".2" margin="0 3rem" /> 
                
                    <div className="news__display--like-comment-button">
                        <button className="news__display--like-button">
                            <img src={likeIcon} alt="like button" />
                        </button>

                        <button className="news__display--comment-button">
                            <img src={commentIcon} alt="comment button" />
                        </button>
                    </div>

                    <SeparationLine position="relative" bottom="2rem" opacity=".2" margin="0" />

                    <div className="news__display--comment-sprout">
                        <img src={avatar} alt="user-avatar"  className="news__display--avatar news__display--avatar-small  "/>

                        <div className="news__display--comment-content">
                            <Link className="news__display--userName">Tên người dùng</Link>

                            <p className="news__display--comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nesciunt veniam voluptatem. Earum, nesciunt iusto neque dicta laudantium debitis optio sunt maiores numquam, obcaecati quasi, deleniti reprehenderit architecto? Possimus, sed.</p>

                        </div>
                    </div>

                    <div className="news__display--comment-sprout">
                        <img src={avatar} alt="user-avatar"  className="news__display--avatar news__display--avatar-small  "/>

                        <div className="news__display--comment-content">
                            <Link className="news__display--userName">Tên người dùng</Link>

                            <p className="news__display--comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nesciunt veniam voluptatem. 
                            </p>

                        </div> 
                    </div>

                    <div className="news__display--comment-sprout">
                        <img src={avatar} alt="user-avatar"  className="news__display--avatar news__display--avatar-small  "/>

                        <div className="news__display--comment-content">
                            <Link className="news__display--userName">Tên người dùng</Link>

                            <p className="news__display--comment-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nesciunt veniam voluptatem. 
                            </p>

                        </div> 
                    </div>
                
                    <SeparationLine position="relative" bottom="2rem" opacity=".2" margin="0" />

                    <div className="news__display--comment-action-box">
                        <img src={avatar} alt="user-avatar"  className="news__display--avatar news__display--avatar-small  "/>

                        <div className="news__display--comment-input-sprout">
                            <input className="news__display--comment-input-box" type="text" name="comment"/>
                        </div>

                        <button className="news__display--comment-action-button">
                            Bình luận
                        </button>
                    </div>
                </div>
                </section>
            </main>
        );
    }
}

export default NewsPage;