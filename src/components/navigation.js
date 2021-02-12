import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
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

  const hoverInThemeHandler = (e) => {
    if (theme.toLowerCase() === "light") {
      setDisplayedTheme(strings[language]["dark"].themeName);
    } else {
      setDisplayedTheme(strings[language]["light"].themeName);
    }
  };

  const hoverInFlagHandler = (e) => {
    if (currentFlag === "🇺🇸") {
      setCurrentFlag(strings["es"].flag);
    } else {
      setCurrentFlag(strings["en"].flag);
    }
  };
  const hoverOutHandler = (e) => {
    setCurrentFlag(strings[language].flag);
    setDisplayedTheme(strings[language][theme].themeName);
  };

  return (
    <Nav className={classNameHandler(theme, "nav")} variant="pills">
      <Button
        onClick={(e) => themeHandler()}
        variant={theme === "dark" ? "outline-light" : "outline-dark"}
        onMouseEnter={(e) => hoverInThemeHandler(e)}
        onMouseLeave={(e) => hoverOutHandler(e)}
      >
        {displayedTheme}
      </Button>
      <Button
        id="flag-btn"
        onClick={(e) => languageHandler()}
        variant={theme === "dark" ? "outline-light" : "outline-dark"}
        onMouseEnter={(e) => hoverInFlagHandler(e)}
        onMouseLeave={(e) => hoverOutHandler(e)}
      >
        {currentFlag}
      </Button>
    </Nav>
  );
};

// flag and lang should change on hover to preview what would change

export default Navigation;
