import React, { Component } from "react";
import callApi from "../../utils/callApi";

import galleryImg_sample from "../../img/gallery-img-sample.png";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  onChangeKey = key => {
    callApi(`gallery/${key}?page=1`, "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  };
  componentWillMount() {
    callApi("gallery/pet?page=1", "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  }
  render() {
    const { image } = this.state;
    return (
      <main>
        <header className="header--gallery" />

        <section className="gallery">
          <div className="gallery__title">Hình Ảnh</div>

          <div className="gallery__sort-list">
            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("pet")}
            >
              Tất cả
            </button>

            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("dog")}
            >
              Chó
            </button>

            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("cat")}
            >
              Mèo
            </button>

            <div className="gallery__dropdown">
              <button
              className="gallery__sort-button gallery__drop-btn"
              
              >
              Khác
              </button>

              <div class="gallery__dropdown-content">
                <button className="gallery__dropdown-btn" onClick={() => this.onChangeKey("hamster")}>Hamster</button>
                <button className="gallery__dropdown-btn" onClick={() => this.onChangeKey("rabbit")}>Thỏ</button>
                <button className="gallery__dropdown-btn" onClick={() => this.onChangeKey("hedgehog")}>Nhím</button>
              </div>
            </div>
            
          </div>

          <div className="gallery__image--collection">
            {image.map((item, index) => (
              <div className="gallery__image--sprout" key={index}>
                <img
                  src={item.link}
                  alt="gallery-displayed"
                  className="gallery__image--displayed"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
