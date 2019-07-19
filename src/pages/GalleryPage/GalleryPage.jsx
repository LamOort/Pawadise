import React, { Component } from "react";
import callApi from "../../utils/callApi";
class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      page: 1,
      loading: false,
      isOpen: false
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.refs.iScroll.addEventListener("scroll", () => {
      callApi(`gallery/pet?page=${page}`, "GET", null).then(res => {
        if (
          this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight <
          this.refs.iScroll.scrollHeight
        ) {
          this.loadMore(res.data);
        }
      });
    });
  }

  onChangeKey = key => {
    const { page } = this.state;
    callApi(`gallery/${key}?page=${page}`, "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  };

  loadMore = arr => {
    this.setState({ loading: true });
    // const arr = [];
    setTimeout(() => {
      this.setState({
        image: this.state.image.concat(arr),
        page: this.state.page + 1,
        loading: false
      });
    },500);
    console.log(this.state.image);
    
    // this.setState(prev => {
    //   return { page: prev.page + 1 };
    // });
  };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
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

            <button
              className="gallery__sort-button"
              onClick={() => this.onChangeKey("hamster")}
            >
              Khác
            </button>
          </div>

          <div className="gallery__image--collection" ref="iScroll">
            {image.map((item, index) => (
              <div className="gallery__image--sprout" key={index}>
                <img
                  src={item.link}
                  alt="gallery-displayed"
                  className="gallery__image--displayed"
                />
                {this.state.loading ? (
                  <p className="loading"> loading More Items..</p>
                ) : (
                  ""
                )}
                {/* <img
                  className="small"
                  src={item.link}
                  onClick={this.handleShowDialog}
                  alt="no image"
                />
                {this.state.isOpen && (
                  <dialog
                    className="dialog"
                    style={{ position: "absolute" }}
                    open
                    onClick={this.handleShowDialog}
                  >
                    <img
                      className="image"
                      src={item.link}
                      onClick={this.handleShowDialog}
                      alt="no image"
                    />
                  </dialog>
                )} */}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default GalleryPage;
