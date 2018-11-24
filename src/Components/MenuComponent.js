import React from "react";
import { NavLink, HashRouter, Route } from "react-router-dom";
import "../Style/MenuComponents.css";
import AboutMeWithHoc from "./AboutMe";
import ProjectsWithHoc from "./Projects";
import british from '../img/british.png';
import russia from '../img/russia.png';
import Footer from "./Footer";


import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

const MenuComponent = ({t}) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }  
    return (
      <HashRouter>
        <div className="App">
          <div className="Wrapper-Menu">
            <div className="Wrapper-Language">              
                <img src={british} alt="" className="Languages-Flag" onClick={ () => changeLanguage('en')}/>
              </div>  
              <div className="Wrapper-Language">
                <img src={russia} alt="" className="Languages-Flag" onClick={ () => changeLanguage('ru')}/>
            </div>
            <div className="Menu-Categories">
              <li className="Category">
                <NavLink to="/aboutMe" className="link" activeStyle={{ color: 'white' }}>
                  {t('about me')}
                </NavLink>
              </li>
              <span>/</span>
              <li className="Category">
                <NavLink to="/projects" className="link" activeStyle={{ color: 'white' }}>
                  {t('my projects')}
                </NavLink>
              </li>
            </div>
          </div>
          <Route exact path="/" component={AboutMeWithHoc} />
          <Route path="/aboutMe" component={AboutMeWithHoc} />
          <Route path="/projects" component={ProjectsWithHoc} />
          <Footer />
        </div>
      </HashRouter>
    );
  }

const MenuComponentWithHoc = withNamespaces()(MenuComponent);
export default MenuComponentWithHoc