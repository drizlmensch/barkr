import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SampleComponent = props => (
  <div>Hello {props.name}!</div>
)

SampleComponent.defaultProps = {
  name: 'Alexander'
}

SampleComponent.propTypes = {
  name: PropTypes.string
}

export default SampleComponent;
