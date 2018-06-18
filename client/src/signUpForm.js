import React, { Component } from 'react';

class signUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''};

    this.handleChangeU = this.handleChangeU.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));
  // }

  handleChangeU(event) {
    this.setState({username: event.target.value});
  }

  handleChangeP(event) {
    this.setState({password: event.target.value});
  }


  handleSubmit(event) {
    if(this.checkUser(this.state.username,this.state.password))
      alert('User Already Exists');
    else
      alert('Account Created');
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
    console.log(this.props.users)
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

export default signUpForm;