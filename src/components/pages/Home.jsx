import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Bio from '../Bio';
import Skills from '../Skills';

const strings = require('../../strings.json');

const Home = ({ language, theme, classNameHandler }) => {
  useEffect(() => {
    document.title = strings[language].home;
  }, [language]);
  return (
    <Container fluid className="home-grid">
      <Bio
        language={language}
        theme={theme}
        classNameHandler={classNameHandler}
      />
      <Skills theme={theme} classNameHandler={classNameHandler} />
    </Container>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  classNameHandler: PropTypes.func.isRequired,
};

export default Home;
