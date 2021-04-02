import React from 'react';
import PropTypes from 'prop-types';

const strings = require('../strings.json');

const formatText = (text) => (
  <div>
    {text.split('  ').map((p) => (
      <p>{p}</p>
    ))}
  </div>
);

const Hobby = ({
  text, language, src, alt,
}) => (
  <div className="hobby-card">
    <img className="hobby-img" src={src} alt={alt} />
    {formatText(strings[language].hobbies.hobbies[text])}
  </div>
);

Hobby.propTypes = {
  text: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Hobby;
