import React, { Component } from 'react';
import NameForm from './NameForm.js'
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <NameForm users={this.state.users} />
      </div>
    );
  }
}

export default App;


