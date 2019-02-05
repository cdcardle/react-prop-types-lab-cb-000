import React from 'react';
// import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
      </div>
    )
  }
}
