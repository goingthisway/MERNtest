import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));
  // }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.checkUser(this.state.value))
      alert('found');
    else
      alert('not found');
    event.preventDefault();
  }

  checkUser(name) {
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
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} 
            disabled={this.props.users.length===0} />
        </label>
        <input type="submit" value="Submit" disabled={this.props.users.length===0} />
      </form>
    );
  }
}

export default NameForm;