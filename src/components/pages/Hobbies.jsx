import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Hobby from '../Hobby';
import honeycomb from '../../images/honeycomb.jpeg';

const strings = require('../../strings.json');

const Hobbies = ({ language, theme, classNameHandler }) => {
  useEffect(() => {
    document.title = strings[language].hobbies.title;
  }, [language]);
  return (
    <Container
      fluid
      className={`${classNameHandler(theme, 'hobbies')} hobbies-grid`}
    >
      <Row>
        <Col>
          <h1>{strings[language].hobbies.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Hobby language={language} text="glass" src={honeycomb} alt="Stained glass" />
        </Col>
      </Row>
    </Container>
  );
};

Hobbies.propTypes = {
  language: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  classNameHandler: PropTypes.func.isRequired,
};

export default Hobbies;
