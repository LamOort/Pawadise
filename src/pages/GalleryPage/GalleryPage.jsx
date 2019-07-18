import React, { Component } from "react";
import callApi from "../../utils/callApi";

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  componentWillMount() {
    callApi("gallery/cat?page=2", "GET", null).then(res => {
      this.setState({
        image: res.data
      });
    });
  }
  render() {
    console.log();
    const { image } = this.state;
    return (
      <div>
        {image.map((item, index) => (
          <div key={index}>
            <img src={item.link} alt="" />
          </div>
        ))}
      </div>
    );
  }
}

export default GalleryPage;
