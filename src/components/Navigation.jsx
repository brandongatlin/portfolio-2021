import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const strings = require('../strings.json');

const Navigation = ({
  themeHandler,
  languageHandler,
  classNameHandler,
  theme,
  language,
}) => {
  const [displayedTheme, setDisplayedTheme] = useState(
    strings[language][theme].themeName,
  );
  const [currentFlag, setCurrentFlag] = useState(strings[language].flag);

  const hoverInThemeHandler = () => {
    if (theme.toLowerCase() === 'light') {
      setDisplayedTheme(strings[language].dark.themeName);
    } else {
      setDisplayedTheme(strings[language].light.themeName);
    }
  };

  const hoverInFlagHandler = () => {
    if (currentFlag === '🇺🇸') {
      setCurrentFlag(strings.es.flag);
    } else {
      setCurrentFlag(strings.en.flag);
    }
  };

  const hoverOutHandler = () => {
    setCurrentFlag(strings[language].flag);
    setDisplayedTheme(strings[language][theme].themeName);
  };

  return (
    <Nav className={classNameHandler(theme, 'nav')} variant="pills">
      <Nav.Item>
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio">/portfolio</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/hobbies">/hobbies</Link>
      </Nav.Item>
      <Button
        id="theme-btn"
        onClick={() => themeHandler()}
        variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
        onMouseEnter={() => hoverInThemeHandler()}
        onMouseLeave={() => hoverOutHandler()}
      >
        {displayedTheme}
      </Button>
      <Button
        id="flag-btn"
        onClick={() => languageHandler()}
        variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
        onMouseEnter={() => hoverInFlagHandler()}
        onMouseLeave={() => hoverOutHandler()}
      >
        {currentFlag}
      </Button>
    </Nav>
  );
};

Navigation.propTypes = {
  themeHandler: PropTypes.func.isRequired,
  languageHandler: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  classNameHandler: PropTypes.func.isRequired,
};

export default Navigation;
