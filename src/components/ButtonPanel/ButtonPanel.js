import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { keys } from '../../constants/keysConstants';

class ButtonPanel extends Component {
  componentDidMount() {
    const { reference } = this.props;
    reference.current.focus();
  }

  clickHandler = (buttonName) => {
    const { handleInteraction } = this.props;
    handleInteraction(buttonName);
  }

  keyHandler = (e) => {
    e.preventDefault();
    const key = e.nativeEvent.keyCode;
    const isValidKey = !!keys[key];
    if (isValidKey) {
      const keyName = keys[key];
      this.clickHandler(keyName);
    }
  }

  render() {
    const { reference } = this.props;
    return (
      <div className="calculator" onKeyDown={this.keyHandler} role="grid" ref={reference} tabIndex="0">
        <Button name="AC" clickHandler={this.clickHandler} type="ac" />
        <Button name="+/-" clickHandler={this.clickHandler} type="plusmin" />
        <Button name="%" clickHandler={this.clickHandler} type="perc" />
        <Button name="/" clickHandler={this.clickHandler} type="divide" />
        <Button name="7" clickHandler={this.clickHandler} type="seven" />
        <Button name="8" clickHandler={this.clickHandler} type="eight" />
        <Button name="9" clickHandler={this.clickHandler} type="nine" />
        <Button name="x" clickHandler={this.clickHandler} type="mult" />
        <Button name="4" clickHandler={this.clickHandler} type="four" />
        <Button name="5" clickHandler={this.clickHandler} type="five" />
        <Button name="6" clickHandler={this.clickHandler} type="six" />
        <Button name="-" clickHandler={this.clickHandler} type="sub" />
        <Button name="1" clickHandler={this.clickHandler} type="one" />
        <Button name="2" clickHandler={this.clickHandler} type="two" />
        <Button name="3" clickHandler={this.clickHandler} type="three" />
        <Button name="+" clickHandler={this.clickHandler} type="add" />
        <Button name="0" clickHandler={this.clickHandler} type="zero" />
        <Button name="=" clickHandler={this.clickHandler} type="equals" />
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleInteraction: PropTypes.func.isRequired,
  reference: PropTypes.shape({}).isRequired,
};

export default ButtonPanel;
