import React, { Component } from 'react'
import { SideMenu } from '../SideMenu/SideMenu'
import { Content } from '../Content/Content'
import { FocusableHotkeys } from '../FocusableHotKeys/FocusableHotkeys'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.contentRef = null;
    this.sideMenuRef = null;

    this.handlers = {
      moveRight: this.moveRight,
      moveLeft: this.moveLeft
    };
  }

  moveRight = () => {
    this.contentRef.setFocus();
  }

  moveLeft = () => {
    this.sideMenuRef.setFocus();
  }

  render() {
    return (
      <FocusableHotkeys handlers={this.handlers}>
        <SideMenu ref={(ref) => this.sideMenuRef = ref }/>
        <Content ref={(ref) => this.contentRef = ref }/>
      </FocusableHotkeys>
    );
  }
}
