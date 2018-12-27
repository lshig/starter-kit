import PropTypes from 'prop-types';
import React from 'react';

export default function Heading({ text }) {
  return <h1>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired
};
