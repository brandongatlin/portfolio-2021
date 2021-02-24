import React from "react";
import gitHub from "../images/github2.jpg";
import linkedIn from "../images/linkedin.png";
const strings = require('../strings.json');

const Footer = ({ language, theme, classNameHandler }) => {
    const formatCopyrightDate = (msg)=> {
        return msg.replace('[START]', 2021).replace('[CURRENT]', new Date().getFullYear());
    }
  return (
    <footer className={classNameHandler(theme, "footer") + " footer-grid"}>
      <img className="footer-img gh" src={gitHub} />
      <p className='text-center'>{formatCopyrightDate(strings[language].copyright)}</p>
      <img className="footer-img li" src={linkedIn} />
    </footer>
  );
};

export default Footer;
