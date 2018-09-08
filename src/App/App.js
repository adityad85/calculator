/* eslint-disable react/no-unused-state */
import React from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

import calculate from '../helpers/calculate';

import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleInteraction = (buttonName) => {
    const object = this.state;
    this.setState(calculate(object, buttonName));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="root-container">
        <Display value={next || total || '0'} />
        <ButtonPanel handleInteraction={this.handleInteraction} />
      </div>
    );
  }
}

export default App;
