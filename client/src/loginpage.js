import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SignInForm from './signInForm.js'
import SignUpForm from './signUpForm.js'

class loginPage extends Component {
  state = {users: []}

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }



  render() {
    return (
      <div className="App">
      <div class="two-col">
      <div class="col1_text">
        <h2>Sign In</h2>
      </div>
      <div class="col2_text">
        <h2>Sign Up</h2>
      </div>
      <div class="col1">
        <SignInForm users={this.state.users} />
      </div>

      <div class="col2">
        <SignUpForm users={this.state.users} />
      </div>
      </div>
      </div>
    );
  }
}

export default loginPage;


