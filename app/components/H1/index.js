'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class H1 extends Component {
  static defaultProps: {
    text: string
  }
  render () {
    return (
      <h1>{this.props.text}</h1>
    )
  }
}
H1.defaultProps = {
  text: ''
}
H1.propTypes = {
  text: PropTypes.string.isRequired
}
