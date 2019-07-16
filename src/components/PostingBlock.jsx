import React, { Component } from 'react';
import SeparationLine from './SeparationLine';

import blue_paw from "../img/paw.png";
import avatar from'../img/user-avatar-sample.png';

class PostingBlock extends Component {
    render() {
        return(
                <div className="news__post-container u-margin-bottom-big">
                    <div className="news__post-container--header">
                        <p className="news__post-container--header--paragraph">Tạo bài viết</p>  
                    </div>

                    <div className="news__post-container--body">
                        <img src={avatar} alt="user-avatar" className="news__post-container--body--avatar"/>

                        <div className="news__post-container--body--sprout">
                                <textarea className="news__post-container--body--content" 
                                name="message" placeholder="Bạn đang nghĩ gì?"></textarea>
                        </div> 
                    
                        <button className="btn__action btn__action--post">
                                Đăng
                            <img src={blue_paw} alt="paw_icon" className="btn__action--paw--post" />
                        </button>
                    </div> 

                    <SeparationLine position="relative" bottom="12rem" opacity=".2" margin="0 5rem"  /> 
                </div>
        );
    }
}

export default PostingBlock;