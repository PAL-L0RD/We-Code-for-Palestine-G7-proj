import React from 'react';
class Goha extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
    }));
  }
  render() {
    let word;
    let curstate;
    if (this.state.loggedIn) {
      word = 'out';
      curstate = ' You are logged in';
    }
    if (this.state.loggedIn == false) {
      word = 'in';
      curstate = 'You are logged out';
    }
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>Log {word}</h1>
        </button>
        <br></br>
        <h1>{curstate}</h1>
      </div>
    );
  }
}
export default Goha;
