import React, { Component } from "react";
import * as api from "../config/config";
import ImageResults from "./image-results/ImageResults";

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
      let { key, url, limit, query } = this.state;
      fetch(`${url}?key=${key}&q=${query}&per_page=${limit}&type=photo`)
        .then(res => res.json())
        .then(res => {
          this.setState({ results: res.hits });
        })
        .catch(err => console.error(err));
    });
  };

  handleLimit = e => {
    let { value } = e.target;
    this.setState({ limit: value });
  };

  render() {
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
            className="custom-select"
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

        {this.state.query !== "" ? (
          <ImageResults images={this.state.results} />
        ) : null}
      </section>
    );
  }
}
