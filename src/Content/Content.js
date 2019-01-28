import React, { Component } from 'react'
import './Content.css'
import { FocusableHotkeys } from '../FocusableHotKeys/FocusableHotkeys'

export class Content extends Component {
  constructor(props) {
    super(props)
    this.log = 'oie';

    this.handlers = {
      moveUp: this.moveUp
    };
  }

  setFocus() {
    this._ref.setFocus();
  }

  moveUp = () => {
    console.log('Content', this.log);
  }

  render() {
    return (
      <FocusableHotkeys
        handlers={this.handlers}
        ref={(ref) => this._ref = ref}
      >Content Works!</FocusableHotkeys>
    );
  }
}
