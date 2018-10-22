import React, { Component } from "react";
// import "./styleAboutMe.css";
class AboutMe extends Component {
  render() {
    return (
      <div className="About-Me-Page">
        <div className="Contact-Information">
          <div className="My-Photo"> </div>
          <div className="My-Name">
            <p className="First-Name">Андрей</p>
            <p className="Surname"> Однолько</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">Адрес:</p>
            <p className="Specific-Information">
              Каменногорская 14,
              <br /> Минск,
              <br /> Беларусь
            </p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">Телефон:</p>
            <p className="Specific-Information">+37544-5852219</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">E-mail:</p>
            <p className="Specific-Information">odnolkoandrei92@gmail.com</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">Git:</p>
            <a
              href="https://gitlab.com/Odnolko_Andrew"
              className="Specific-Information Link-My-Git"
            >
              gitlab.com/Odnolko_Andrew
            </a>
          </div>
        </div>
        <div className="About-Me-Information">
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">Образование</p>
            <p className="Full-Description">
              Белорусский национальный технический университет.
              <br />
              Механико-технологический факультет.
              <br />
              “Металлургическая обработка черных и цветных
              <br />
              металлов”
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">Опыт и умения</p>
            <p className="Full-Description">
              -фриланс более 6 месяцев: вёрстка, react;
              <br />
              -разработка сайтов-визиток с использованием
              <br />
              веб-технологий HTML5, CSS3, JS, Ajax;
              <br />
              -разработка макетов сайтов и реализация
              <br />
              графического дизайна рекламной продукции и<br />
              прочей атрибутики для ресторанного бизнеса в<br />
              графическом редакторе Photoshop;
              <br />
              -уверенные знания vanilla JS (es6, prototype, map,
              <br />
              reduce, promise, fetch, etc.)
              <br />
              -командная работа с GIT (branches, merge, push,
              <br />
              pull, commit);
              <br />
              -работа с ajax запросами с использованием jquery
              <br />и axios;
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">Навыки</p>
            <p className="Full-Description">
              -HTML5;
              <br />
              -CSS3, LESS, SASS, Bootstrap;
              <br />
              -JavaScript;
              <br />
              -React и Redux;
              <br />
              -GitLab, GitHub;
              <br />
              -ООП, SOLID;
              <br />
              -Ajax;
              <br />
              -Abode Photoshop, CorelDRAW;
              <br />
              -VS Code;
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">Дополнительные знания</p>
            <p className="Full-Description">
              Уровень знания Английского - pre-intermidiate
              <br />
              (уверенно читаю техническую литературу,
              <br />
              разговариваю на несложные темы)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
