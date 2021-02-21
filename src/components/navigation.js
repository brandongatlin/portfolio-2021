import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
const strings = require("../strings.json");

const Navigation = ({
  themeHandler,
  languageHandler,
  classNameHandler,
  theme,
  language,
}) => {
  const [displayedTheme, setDisplayedTheme] = useState(
    strings[language][theme].themeName
  );
  const [currentFlag, setCurrentFlag] = useState(strings[language].flag);

  const hoverInThemeHandler = () => {
    if (theme.toLowerCase() === "light") {
      setDisplayedTheme(strings[language]["dark"].themeName);
    } else {
      setDisplayedTheme(strings[language]["light"].themeName);
    }
  };

  const hoverInFlagHandler = () => {
    if (currentFlag === "🇺🇸") {
      setCurrentFlag(strings["es"].flag);
    } else {
      setCurrentFlag(strings["en"].flag);
    }
  };

  const hoverOutHandler = () => {
    setCurrentFlag(strings[language].flag);
    setDisplayedTheme(strings[language][theme].themeName);
  };

  return (
    <Nav className={classNameHandler(theme, "nav")} variant="pills">
      <Nav.Item>
        <Link to="/">
          <img id="logo" src={logo} />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio">/portfolio</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">/contact</Link>
      </Nav.Item>
      <Button
        id="theme-btn"
        onClick={() => themeHandler()}
        variant={theme === "dark" ? "outline-light" : "outline-dark"}
        onMouseEnter={() => hoverInThemeHandler()}
        onMouseLeave={() => hoverOutHandler()}
      >
        {displayedTheme}
      </Button>
      <Button
        id="flag-btn"
        onClick={() => languageHandler()}
        variant={theme === "dark" ? "outline-light" : "outline-dark"}
        onMouseEnter={() => hoverInFlagHandler()}
        onMouseLeave={() => hoverOutHandler()}
      >
        {currentFlag}
      </Button>
    </Nav>
  );
};

// flag and lang should change on hover to preview what would change

export default Navigation;
