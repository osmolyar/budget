import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import DisplayContainer from './components/DisplayContainer';

class App extends Component {
  render() {
    return (
      <DisplayContainer  />
    );
  }
}

export default connect((props) => (props), {
})(App);
