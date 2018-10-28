import React, { Component } from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import "../Style/MenuComponents.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

class MenuComponent extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="Wrapper-Menu">
            <ul className="Menu-Categories">
              <li className="Category">
                <Link to="/aboutMe" className="link">about Me</Link>
              </li>
              <span>/</span>
              <li className="Category">
                <Link to="/projects" className="link">My projects</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={AboutMe} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/projects" component={Projects} />
        </div>
      </HashRouter>
    );
  }
}

export default MenuComponent;
