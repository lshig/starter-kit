import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/heading.scss';

export default function Heading({ text }) {
  return <h1 className={styles.heading1}>{text}</h1>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired
};
