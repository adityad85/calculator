import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    const { clickHandler, name } = this.props;
    clickHandler(name);
  };

  render() {
    const { type, name } = this.props;
    return (
      <div className={`${type} btn`} onClick={this.handleClick}>
        {name}
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
