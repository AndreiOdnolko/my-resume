import React from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import "../Style/MenuComponents.css";
import AboutMeWithHoc from "./AboutMe";
import ProjectsWithHoc from "./Projects";
import british from '../img/british.png';
import russia from '../img/russia.png';
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
                <Link to="/aboutMe" className="link">{t('about me')}</Link>
              </li>
              <span>/</span>
              <li className="Category">
                <Link to="/projects" className="link">{t('my projects')}</Link>
              </li>
            </div>
          </div>
          <Route exact path="/" component={AboutMeWithHoc} />
          <Route path="/aboutMe" component={AboutMeWithHoc} />
          <Route path="/projects" component={ProjectsWithHoc} />
        </div>
      </HashRouter>
    );
  }

const MenuComponentWithHoc = withNamespaces()(MenuComponent);
export default MenuComponentWithHoc