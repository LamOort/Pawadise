import React, { Component } from 'react';
import callApi from '../../utils/callApi';

import SeparationLine from '../../components/SeparationLine';
import avatar from'../../img/user-avatar-sample.png';


class ProfilePage extends Component {
    componentDidMount(){
        callApi('users/me','GET',null).then(res=>{
            console.log(res);            
        })
    }
    render() {
        return (
            <main>
                <header className="header--profile"/>

                <section className="profile">
                    <h2 className="profile__title">Thông tin cá nhân</h2>

                    <SeparationLine position="relative" bottom="5" opacity=".2" margin="0 14rem" />

                    <div className="profile__info-sprout">
                        <div className="profile__info--text-container">
                            <label className="profile__attribute">
                                Tên
                            </label>

                            <div className="profile__value-sprout">

                            <input
                            className="profile__value"
                            type="text"
                            placeholder="Quý danh"
                            name="name"
                            />
                            </div>
                        </div>

                        <div className="profile__info--text-container">
                            <label className="profile__attribute">
                                Tuổi
                            </label>

                            <div className="profile__value-sprout">

                            <input
                            className="profile__value"
                            type="text"
                            placeholder="Bạn bao nhiêu nồi bánh chưng rồi ?"
                            name="age"
                            />
                            </div>
                        </div>

                        <div className="profile__info--text-container">
                            <label className="profile__attribute">
                                Email
                            </label>

                            <div className="profile__value-sprout">

                            <input
                            className="profile__value"
                            type="text"
                            placeholder="Email"
                            name="email"
                            />
                            </div>
                        </div>

                        <div className="profile__info--text-container">
                            <label className="profile__attribute">
                                Số điện thoại
                            </label>

                            <div className="profile__value-sprout">

                            <input
                            className="profile__value"
                            type="text"
                            placeholder="Giúp chúng tôi giữ liên lạc"
                            name="phoneNumber"
                            />
                            </div>
                        </div>

                        <div className="profile__info--text-container">
                            <label className="profile__attribute">
                                Địa chỉ
                            </label>

                            <div className="profile__value-sprout">

                            <input
                            className="profile__value"
                            type="text"
                            placeholder="Bạn nhà ở đâu thế ?"
                            name="address"
                            />
                            </div>
                        </div>

                        <button className="profile__save-button">Lưu</button>
                    </div>

                    <div style={{
                        borderLeft: '1px solid #000',
                        borderRight: '1px solid #000',
                        height:'50rem',
                        position:'absolute',
                        right:'33%',
                        top:'127%',
                        opacity:'.2',
                        }}>
                    </div>

                    <div className="profile__avatar-container">
                        <img src={avatar} alt="user avatar" className="profile__avatar"/>
                    </div>

                    <button className="profile__change-avatar-button">
                        Chọn ảnh
                    </button>
                </section>
            </main>
        );
    }
}

export default ProfilePage;