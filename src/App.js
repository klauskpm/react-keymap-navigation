import React, { Component } from 'react'
import './App.css'
import { HotKeys } from 'react-hotkeys'
import { Home } from './Home/Home'

const keyMap = {
  'moveUp': 'up',
  'moveRight': 'right',
  'moveDown': 'down',
  'moveLeft': 'left',
};

class App extends Component {
  render() {
    return (
      <HotKeys keyMap={keyMap}>
        <Home/>
      </HotKeys>
    );
  }
}

export default App;
