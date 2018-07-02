import React, { Component } from "react";
import logo from "../logo.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="App-title">Pixabay Image Search</h1>
      </header>
    );
  }
}
