import React from 'react';
class Daniel extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick() {
    this.setState({ loggedIn: true });
  }
  handleClick2() {
    this.setState({ loggedIn: false });
  }

  render() {
    let word;
    if (this.state.loggedIn) {
      word = 'logged in';
    }
    if (this.state.loggedIn == false) {
      word = 'logged out';
    }
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>Log in</h1>
        </button>
        <br></br>
        <br></br>
        <button onClick={this.handleClick2}>
          <h2>Log out</h2>
        </button>
        <br></br>
      </div>
    );
  }
}
export default Daniel;
