import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

class signInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false};

    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeU(event) {
    this.setState({username: event.target.value});
  }

  handleChangeP(event) {
    this.setState({password: event.target.value});
  }


  handleSubmit(event) {
    if(this.checkUser(this.state.username,this.state.password))
      this.setState({ redirect: true })
    else
      alert('not found');
    event.preventDefault();
  }

  checkUser(name,pword) {
    var found = false;
    for(var i = 0; i < this.props.users.length; i++) {
      if (this.props.users[i].username === name) {
          found = true;
          break;
      }
    }
    return found;
  }

  render() {
      if(this.state.redirect){
        return(<Redirect to='/login' />)    
      }
      return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleChangeU} 
            disabled={this.props.users.length===0} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangeP} 
            disabled={this.props.users.length===0} />
        </label>
        <input type="submit" value="Submit" disabled={this.props.users.length===0} />
      </form>


    );
  }
}

export default signInForm;