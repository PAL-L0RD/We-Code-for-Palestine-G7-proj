import React, { Component } from 'react';
class stupid extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.thelink} alt={''} />
        <h1>{this.props.thename}</h1>
      </div>
    );
  }
}
export default stupid;
