import React, { Component } from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

class MenuComponent extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="Wrapper-Menu">
            <ul className="Menu-Categories">
              <li class="Category">
                <Link to="/aboutMe">about Me</Link>
              </li>
              <span>/</span>
              <li class="Category">
                <Link to="/projects">My projects</Link>
              </li>
            </ul>
          </div>
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/projects" component={Projects} />
        </div>
      </HashRouter>
    );
  }
}

export default MenuComponent;
