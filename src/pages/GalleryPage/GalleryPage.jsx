import React, { Component } from 'react';
import galleryImg_sample from '../../img/gallery-img-sample.png';

class GalleryPage extends Component {
    render() {
        return (
            <main>
                <header className="header--gallery"/>

                <section className="gallery">
                    <div className="gallery__title">Hình Ảnh</div>

                    <div className="gallery__sort-list">
                        <button className="gallery__sort-button">
                            Tất cả
                        </button>

                        <button className="gallery__sort-button">
                            Chó     
                        </button>

                        <button className="gallery__sort-button">
                            Mèo       
                        </button>

                        <button className="gallery__sort-button">
                            Khác         
                        </button>
                    </div>

                    <div className="gallery__image--collection">
                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>
                        
                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>

                        <div className="gallery__image--sprout">
                            <img src={galleryImg_sample} alt="gallery-displayed" className="gallery__image--displayed"/>
                        </div>
                         
                    </div>
                </section>
            </main>
        );
    }
}

export default GalleryPage;