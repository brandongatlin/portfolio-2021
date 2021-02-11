import React from "react";
import {Nav, Button} from 'react-bootstrap';
const strings = require('../strings.json');

const Navigation = ({themeHandler, languageHandler, classNameHandler, theme, language, flag }) => {
  return (
    <Nav className={classNameHandler(theme, 'nav')} variant="pills">
      <Button onClick={(e)=> themeHandler()} variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}>{strings[language][theme].themeName}</Button>
      <Button onClick={(e)=> languageHandler()} variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}>{strings[language].flag}</Button>
    </Nav>
  );
};

// [lang][str]

export default Navigation;
