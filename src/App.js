import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Router basename={"/react_portfolio"}>
        <div className="container">
          <Navbar />
          <div className="d-flex justify-content-center">
            <Route exact path="/" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/contactme" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
