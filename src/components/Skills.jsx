import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const mySkills = require('../myskills.json');

const Skills = ({ theme, classNameHandler }) => (
  <Row className={classNameHandler(theme, 'skills')}>
    <Col>
      <pre>{JSON.stringify(mySkills, null, 4)}</pre>
    </Col>
  </Row>
);

Skills.propTypes = {
  theme: PropTypes.string.isRequired,
  classNameHandler: PropTypes.func.isRequired,
};

export default Skills;
