import React, { Component } from "react";
import "../Style/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="Wrapper-My-Projects">
        <div className="first-line">
          <div className="wrapper-project-todolist">
            <div className="full-information-about-todolist">
              <p className="name-project">to do list<span className="star">*</span></p>
              <p className="about-todolist">
                -Работа с объектами;<br />
                -Работа с шаблонными строками;<br />
                -Ajax запросы с использование jquery;<br />
                (get, post, delete, put)<br />
                -Использование синтаксиса ES6;<br />
                -Использование promise при работе с ajax запросами;<br />
                -Соблюдение принципа Dependency Injection;<br />
                -Верстка с использованием flexbox;<br />
                -Верстка с использованием bootstrap;<br />
                -Работа с Less;<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/mytodolist_js" className="image-todolist"> </a>
            </div>
          </div>
          <div className="wrapper-project-calculator">
            <div className="full-information-about-calculator">
              <p className="name-project">calculator<span className="star">*</span></p>
              <p className="about-calculator">
                -Работа с объектами;<br />
                -Работа с шаблонными строками;<br />
                -Использование синтаксиса ES6;<br />
                -Верстка с использованием flexbox;<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/calculator_object" className="image-calculator"> </a>
            </div>
          </div>
        </div>
        <div className="second-line">
          <div className="wrapper-project-hi5">
            <div className="full-information-about-hi5">
              <p className="name-project">hi5<span className="star">*</span>
              </p>
              <p className="about-hi5">
                -Разработка дизайна и логотипа с нуля (Photoshop);<br />
                -Верстка с использованием flexbox;<br />
                -Верстка с использованием Less;<br />
                -Работа с jquery;</p>  
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/hi5-metropol" className="image-hi5"> </a>
            </div>
          </div>
          <div className="wrapper-project-fruit-basket">
            <div className="full-information-about-fruit-basket">
              <p className="name-project">fruit basket<span className="star">*</span>
              </p>
              <p className="about-fruit-basket">
                -Работа с объектами;<br />
                -Работа с шаблонными строками;<br />
                -Использование синтаксиса ES6;<br />
                -Работа с Local Storage;<br />
                (setItem, getItem, clear)<br />
                -Верстка с использованием flexbox;<br />
                -Верстка с использованием bootstrap;<br />
                -Верстка с использованием Less;<br />
              </p>
            </div>
            <div className="wrapper-image">
              <a href="https://odnolko_andrew.gitlab.io/fruit-basket" className="image-fruit-basket"> </a>
            </div>
          </div>
        </div>
        <span className="wrapper-about-start">
          <span className="star">*</span> - нажмите на изображение что бы просмотреть проект</span>
      </div>
    );
  }
}

export default Projects;
