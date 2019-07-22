import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { InfiniteScroll } from "react-infinite-scroller";
class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      page: 1,
      hasMoreImg: true
    };
  }

  componentDidMount() {
    callApi("gallery/pet?page=1", "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  }

  onChangeKey = key => {
    callApi(`gallery/${key}?page=1`, "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  };

  loadMoreImg = () => {
    const self = this;
    const { page } = this.state;
    callApi(`gallery/pet/page=${page}`)
      .then(res => {
        const images = self.state.images;
        res.data.map(image => images.push(image));
        if (images.length === 20) {
          self.setState({
            images: images,
            page: page + 1
          });
        } else {
          self.setState({
            hasMoreImg: false
          });
        }
      })
      .catch(err => {
        console.log(err);
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
    const { images } = this.state;
    const loader = <div className="loader">Loading ...</div>;
    const items = [];

    images.map((item, index) =>
      items.push(
        <div className="gallery__image--sprout" key={index}>
          <img
            src={item.link}
            alt="gallery-displayed"
            className="gallery__image--displayed"
          />
        </div>
      )
    );

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
              <button className="gallery__sort-button gallery__drop-btn">
                Khác
              </button>

              <div class="gallery__dropdown-content">
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("hamster")}
                >
                  Hamster
                </button>
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("rabbit")}
                >
                  Thỏ
                </button>
                <button
                  className="gallery__dropdown-btn"
                  onClick={() => this.onChangeKey("hedgehog")}
                >
                  Nhím
                </button>
              </div>
            </div>
          </div>

          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMoreImg}
            hasMore={this.state.hasMoreImg}
            loader={loader}
          >
            <div className="gallery__image--collection">{items}</div>
          </InfiniteScroll>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
