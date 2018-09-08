import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    const { clickHandler, name } = this.props;
    clickHandler(name);
  };

  render() {
    const { operation, zero, name } = this.props;
    const className = [
      'button-component',
      operation ? 'operation' : '',
      zero ? 'zero' : '',
    ];
    return (
      <div className={className.join(' ').trim()}>
        <button type="button" onClick={this.handleClick}>
          {name}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
  zero: PropTypes.bool.isRequired,
};

export default Button;
