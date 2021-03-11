import React from 'react';
import PropTypes from 'prop-types';
import honeycomb from '../images/honeycomb.jpeg';

const strings = require('../strings.json');

const Hobby = ({ text, language }) => (
  <div className="hobby-card">
    <img className="hobby-img" src={honeycomb} alt="stained glass honeycomb" />
    <div>{strings[language].hobbies.hobbies[text]}</div>
  </div>
);

Hobby.propTypes = {
  text: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Hobby;
