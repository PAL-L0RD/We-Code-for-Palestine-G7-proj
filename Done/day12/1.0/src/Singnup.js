import React from 'react';

import './App.css';
import { auth } from './firebase'
class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.handleChange=this.handleChange.bind(this)
    this.signup=this.signup.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});

}
signup(event) {
  event.preventDefault();         
  auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
                  alert(res)
              }).catch((err)=>{
                  alert(err);
              })
      }


  render() {
    return (
      <div className="App">

        <form onSubmit={this.signup}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button> Submit </button>
        </form>

      </div>
    );
  }
}

export default Signup;
