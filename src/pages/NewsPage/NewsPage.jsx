import React, { Component } from 'react';
import full_bg from'../../img/bg-full.png';

class NewsPage extends Component {
    render() {
        return (
            <main>
                <img src={full_bg} alt="full-bg" className="bg"/>
                <header className="header--news"/>

                <section className="news">
                    <div className="news__post-box">
                        <div className="news__post-box--header">
                            <div className="new__post-box--body">
                                    
                            </div>    
                        </div> 
                    </div>
                </section>
            </main>
        );
    }
}

export default NewsPage;