import React from "react";
import gitHub from "../images/github2.jpg";
import linkedIn from "../images/linkedin.png";
const strings = require("../strings.json");

const Footer = ({ language, theme, classNameHandler }) => {
  const formatCopyrightDate = (msg) => {
    return msg
      .replace("[START]", 2021)
      .replace("[CURRENT]", new Date().getFullYear());
  };
  return (
    <footer className={classNameHandler(theme, "footer") + " footer-grid"}>
      <a className='gh' href="https://github.com/brandongatlin" target='_blank'>
        <img className="footer-img" src={gitHub} />
      </a>
      <p className="text-center">
        {formatCopyrightDate(strings[language].copyright)}
      </p>
      <a className='li' href="https://www.linkedin.com/in/brandon-gatlin/" target='_blank'>
        <img className="footer-img" src={linkedIn} />
      </a>
    </footer>
  );
};

export default Footer;
