import React, { Component } from "react";

export default class ImageResults extends Component {
  getTags = id => {
    let { images } = this.props;
    let tags = images[id].tags.split(" ");
    tags = tags
      .splice(0, 3)
      .join(" ")
      .replace(/\s/g, ", ");
    return tags;
  };

  render() {
    const results = this.props.images;
    let images =
      results.length > 0
        ? results.map((el, id) => (
            <div className="single-result" key={id}>
              <div
                className="result-content"
                style={{ backgroundImage: `url(${el.largeImageURL})` }}
              >
                <h2 className="result-title">{this.getTags(id)}</h2>
                <p className="result-views">Views: {el.views}</p>
                <p className="result-dl">Downloads: {el.downloads}</p>
              </div>
            </div>
          ))
        : null;

    return (
      <section className="image-results-container">
        <div className="query-results large-wrapper">{images}</div>
      </section>
    );
  }
}
