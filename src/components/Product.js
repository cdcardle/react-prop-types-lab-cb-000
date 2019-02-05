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
  const value = props[propName];
  if (isNaN(value)) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
    );
  }
}
