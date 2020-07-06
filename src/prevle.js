import React from 'react';
import db from './firebase.js';
class Goha extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      Password: '',
    };
  }
  handleTextChange(event) {
    event.preventDefault();
  }
  handleSubmit(event) {
    this.forceUpdate();
    event.preventDefault();
  }
  handleClick() {
    db.collection('Admins').doc('Amro').set({
      Fullname: 'Amro Abou-Hachem',
      email: 'amro@amro.ps',
      title: 'prof',
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>Click Here</h1>
        </button>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            maxlength="20"
            placeholder="Full Name"
            onChange={this.handleTextChange}
          />
          <input
            type="text"
            maxlength="20"
            placeholder="Email"
            onChange={this.handleTextChange}
          />
          <input
            type="text"
            maxlength="20"
            placeholder="Password"
            onChange={this.handleTextChange}
          />

          <button> Submit </button>
        </form>
      </div>
    );
  }
}
export default Goha;
