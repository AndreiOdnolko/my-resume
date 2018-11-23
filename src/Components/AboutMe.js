import React from "react";
import "../Style/AboutMe.css";
import { withNamespaces } from 'react-i18next';


const AboutMe = ({t}) => {
    return (
      <div className="About-Me-Page">
        <div className="Contact-Information">
          <div className="My-Photo"> </div>
          <div className="My-Name">
            <p className="First-Name">{t('Andrew')}</p>
            <p className="Surname">{t('Odnolko')}</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">{t('Address')}</p>
            <p className="Specific-Information">
              {t('Minsk')},<br /> 
              {t('Belarus')}
            </p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">{t('Phone')}:</p>
            <p className="Specific-Information">+37544-5852219</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">{t('E-mail')}:</p>
            <p className="Specific-Information">odnolkoandrei92@gmail.com</p>
          </div>
          <div className="My">
            <p className="Contact-Information-Header">Git:</p>
            <a href="https://gitlab.com/Odnolko_Andrew" className="Specific-Information Link-My-Git">gitlab.com/Odnolko_Andrew</a>
          </div>
        </div>
        <div className="About-Me-Information">
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">{t('Education')}</p>
            <p className="Full-Description">
            {t('Belarusian National Technical University')}.<br />
            {t('Faculty of Mechanics and Technology')}.<br />              
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">{t('Experience and skills')}</p>
            <p className="Full-Description">
              -{t('freelance more than 7 months')};<br />
              -{t('development of business cards with the use')}<br />
              {t('of web technologies HTML5, CSS3, JS, Ajax')};<br />
              -{t('development of site layouts and the implementation')}<br />
              {t('of graphic advertising products and')}<br />
              {t('other attributes for the restaurant business in')}<br />
              {t('the Photoshop graphic editor')};<br />
              -{t('confident knowledge of vanilla js')}<br />
              reduce, promise, fetch, etc.)<br />
              -{t('team work with git')},<br />
              pull, commit);<br />
              -{t('work with ajax queries using jquery')}<br />
              {t('and axios')};
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">{t('Skills')}</p>
            <p className="Full-Description">
              -HTML5;<br />
              -CSS3, LESS, SASS, Bootstrap;<br />
              -JavaScript;<br />
              -React и Redux;<br />
              -GitLab, GitHub;<br />
              -ООP, SOLID;<br />
              -Ajax;<br />
              -Abode Photoshop, CorelDRAW;<br />
              -VS Code, WebStorm;
            </p>
          </div>
          <div className="Education-Experience-And-Skills">
            <p className="Information-Section-Name">{t('Additional knowledge')}</p>
            <p className="Full-Description">
              {t('Level of knowledge of English')}<br />
              {t('I confidently read technical literature')},<br />
              {t('and talk on simple topics')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const AboutMeWithHoc = withNamespaces()(AboutMe);
export default AboutMeWithHoc;
