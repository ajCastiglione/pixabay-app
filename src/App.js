import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="content-container">
          <Search />
        </main>
      </div>
    );
  }
}

export default App;
