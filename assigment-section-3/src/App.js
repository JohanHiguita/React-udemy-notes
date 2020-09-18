import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOuput from "./UserOutput/UserOutput"

class App extends Component {
  state = {
    username: "Johan.higuita"
  }

  changeUsernameHandler = (newUsername) => {
    this.setState({
      username: newUsername
    })
  }

  render() {
    return (
      <div>
        <UserOuput userName={this.state.username} 
        />
        <UserOuput userName={this.state.username} 
        />
        <UserOuput userName={this.state.username} 
        />
        <UserInput changeUser={this.changeUsernameHandler} appState={this.state}/>
      </div>
    );
  }
}

export default App;
