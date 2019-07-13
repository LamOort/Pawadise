import React, { Component } from 'react';

class ContactPage extends Component {
    render() {
        return (
            <main>
                <header className="header--contact"></header>
                <div className="contact">
                    <h2 className="contact__title">Bạn cần giúp đỡ? Liên lạc ngay với chúng tôi</h2>
            
                    <form method="post" action="#" className="contact__form">
                            <div className="contact__left">
                                <label className="contact__label " for="name">Tên</label>
                                <div className="contact__text-field u-margin-bottom-small">
                                    <input className="contact__input" type="text" name="name" id="name" placeholder="Tên bạn" required/>
                                </div>

                                <label className="contact__label" for="email">Email</label>
                                <div className="contact__text-field u-margin-bottom-small">
                                    <input className="contact__input" type="text" name="email" id="email" placeholder="Email" required/>
                                </div>

                                <label className="contact__label" for="title">Tiêu đề</label>
                                <div className="contact__text-field u-margin-bottom-small">
                                    <input className="contact__input" type="text" name="title" id="title" placeholder="Tiêu đề" required/>
                                </div>
                            </div>

                            <div className="contact__right">
                                <label className="contact__right--title contact__label u-margin-bottom-small">Nội dung</label>
                                <div className="contact__right--text-area">
                                    <textarea className="contact__right--text-area-input" 
                                    name="message" placeholder="Nội dung"></textarea>
                                </div>
                                
                            </div> 

                        <div className="contact__submit">
                            <input className="contact__submit--btn" type="submit" value="Gửi"/>
                        </div>   
                    </form>
                </div>
                
            </main>
        );
    }
}

export default ContactPage;