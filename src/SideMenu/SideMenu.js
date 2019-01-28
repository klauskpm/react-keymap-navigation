import React, { Component } from 'react'
import { FocusableHotkeys } from '../FocusableHotKeys/FocusableHotkeys'

export class SideMenu extends Component {
  setFocus() {
    this._ref.setFocus();
  }

  render() {
    return (
      <FocusableHotkeys
        ref={(ref) => this._ref = ref}
      >SideMenu Works!</FocusableHotkeys>
    )
  }
}
