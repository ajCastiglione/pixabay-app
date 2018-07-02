import React, { Component } from "react";
import * as api from "../config/config";

export default class Search extends Component {
  state = {
    query: "",
    results: [],
    limit: 15,
    key: api.apiKey,
    url: api.apiUrl
  };

  handleInput = e => {
    let { value } = e.target;
    this.setState({ query: value }, () => {
      let { key, url, limit } = this.state;
      fetch(`${url}?key=${key}&per_page=${limit}&type=photo`)
        .then(res => res.json())
        .then(res => {
          this.setState({ results: res }, () =>
            console.log(this.state.results)
          );
        })
        .catch(err => console.error(err));
    });
  };

  handleLimit = e => {
    let { value } = e.target;
    this.setState({ limit: value });
  };

  render() {
    let images =
      this.state.results.length > 0
        ? this.state.results.map((el, id) => (
            <div className="single-result" key={id}>
              <div
                className="result-content"
                style={{ backgroundImage: `url(${el.hits.largeImageURL})` }}
              >
                <h2 className="result-title">{el.hits.tags}</h2>
                <p className="result-views">Views: {el.hits.views}</p>
                <p className="result-dl">Downloads: {el.hits.downloads}</p>
              </div>
            </div>
          ))
        : null;
    return (
      <section className="query-container">
        <div className="search-bar">
          <input
            type="search"
            className="form-control"
            onChange={this.handleInput}
          />
          <select
            name="search-limit"
            onChange={this.handleLimit}
            defaultValue={this.state.limit}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <div className="inner-query large-wrapper">{images}</div>
      </section>
    );
  }
}
