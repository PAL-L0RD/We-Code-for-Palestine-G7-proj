import React from 'react';
class Printing extends React.Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props.name1}</h1>
        <h2>Email:{this.props.email1}</h2>
      </div>
    );
  }
}
export default Printing;
