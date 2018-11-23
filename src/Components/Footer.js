import React from "react";
import "../Style/Footer.css";


const Footer = () => {
    return (
      <div className="Wrapper-Footer">
        <div className="footer-container">
          <div className="my-footer-name">AO inc.</div>
          <div className="link-wrapper">
            <a href="https://www.linkedin.com/in/andrew-odnolko/" className="fab fa-linkedin"> </a>        
            <a href="https://t.me/Andrew_Odnolko" className="fab fa-telegram-plane"> </a>
            <a href="https://gitlab.com/Odnolko_Andrew" class="fab fa-gitlab"> </a>
            <a href="https://github.com/AndreiOdnolko" class="fab fa-github"> </a>
          </div>
        </div>
      </div>
    )
}
      

export default Footer;
