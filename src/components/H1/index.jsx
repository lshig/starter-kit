import React from 'react'
import PropTypes from 'prop-types'
export default function H1({ text }) {
  return (
    <h1>{text}</h1>
  )
}
H1.propTypes = {
  text: PropTypes.string.isRequired
}
