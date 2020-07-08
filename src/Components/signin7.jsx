import React from 'react';
import { auth } from '../firebase';
import db from '../firebase';
class log_In extends React.Component {
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(db.name);
  }
  Login(event) {
    console.log('hey');
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.Login = this.Login.bind(this);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Login}>
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
        <button onClick={() => auth.signOut()}>Sign out</button>
        <h1>Hey</h1>
      </div>
    );
  }
}
export default log_In;
