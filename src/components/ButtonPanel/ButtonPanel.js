import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class ButtonPanel extends Component {
  clickHandler = (buttonName) => {
    const { handleInteraction } = this.props;
    handleInteraction(buttonName);
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.clickHandler} />
          <Button name="+/-" clickHandler={this.clickHandler} />
          <Button name="%" clickHandler={this.clickHandler} />
          <Button name="/" clickHandler={this.clickHandler} operation />
        </div>
        <div>
          <Button name="7" clickHandler={this.clickHandler} />
          <Button name="8" clickHandler={this.clickHandler} />
          <Button name="9" clickHandler={this.clickHandler} />
          <Button name="x" clickHandler={this.clickHandler} operation />
        </div>
        <div>
          <Button name="4" clickHandler={this.clickHandler} />
          <Button name="5" clickHandler={this.clickHandler} />
          <Button name="6" clickHandler={this.clickHandler} />
          <Button name="-" clickHandler={this.clickHandler} operation />
        </div>
        <div>
          <Button name="1" clickHandler={this.clickHandler} />
          <Button name="2" clickHandler={this.clickHandler} />
          <Button name="3" clickHandler={this.clickHandler} />
          <Button name="+" clickHandler={this.clickHandler} operation />
        </div>
        <div>
          <Button name="0" clickHandler={this.clickHandler} zero />
          <Button name="." clickHandler={this.clickHandler} />
          <Button name="=" clickHandler={this.clickHandler} operation />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleInteraction: PropTypes.func.isRequired,
};

export default ButtonPanel;
