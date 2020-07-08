import React from 'react';
import { auth } from '../firebase';
class Noob extends React.Component {
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  signup(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }
  render() {
    return (
      <div>
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
export default Noob;
