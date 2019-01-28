import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys'

export class FocusableHotkeys extends Component {
  setFocus() {
    if (document.activeElement === this._ref) {
      return;
    }

    this._ref.focus();
  }

  render() {
    const {handlers} = this.props;

    return (
      <HotKeys handlers={handlers}>
        <div
          tabIndex={0}
          ref={(ref) => this._ref = ref}
        >
          {this.props.children}
        </div>
      </HotKeys>
    );
  }
}
