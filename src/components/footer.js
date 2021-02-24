import React from "react";
import gitHub from "../images/github.png";
import linkedIn from "../images/linkedin.png";

const Footer = ({ language, theme, classNameHandler }) => {
  return (
    <footer className={classNameHandler(theme, "nav") + " footer-grid"}>
      <img className="footer-img gh" src={gitHub} />
      <p>Copyright 2021</p>
      <img className="footer-img li" src={linkedIn} />
    </footer>
  );
};

export default Footer;
