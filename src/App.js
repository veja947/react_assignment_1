import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput';
import UserInput from "./Components/UserInput/UserInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <UserOutput username='user name1'/>
        <UserOutput username='user name2'/>
      </div>
    );
  }
}

export default App;
