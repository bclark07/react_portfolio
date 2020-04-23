import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import React, { useState } from "react";
// import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    currentPage: "About",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <div className="d-flex justify-content-center">{this.renderPage()}</div>
      </div>
    );
  }
}

export default App;
