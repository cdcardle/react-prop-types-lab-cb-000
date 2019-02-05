import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightAllowed
}

function weightAllowed(props, propName, componentName) {
  let weight = props[propName];
  if (weight === undefined) {
    return new Error(propName + ' in ' + componentName + " is required and must be defined.")
  } else if (isNaN(weight)) {
    return new Error(propName + ' in ' + componentName + " is not a number.")
  } else if (weight < 80 || weight > 300) {
    return new Error(propName + ' in ' + componentName + " is not within 80 and 300.");
  }
  return null; // assuming all is ok
};
