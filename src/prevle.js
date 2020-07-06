import React from 'react';
import db from './firebase.js';
class Goha extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  handleClick() {
    db.collection('Admins').doc('Amro').set({
      Fullname: 'Amro Abou-Hachem',
      email: 'amro@amro.ps',
      title: 'prof',
    });
    db.collection('Admins').doc('Hadeel').set({
      Fullname: 'Hadeel',
      email: 'Hadeel@hadeel.ps',
    });
    db.collection('Admins').doc('Naim').set({
      Fullname: 'Naim Qawasmeh',
      email: 'Naimqawasmeh@naim.ps',
    });
    db.collection('Admins').doc('Monya').set({
      Fullname: 'Monya',
      email: 'Monya@monya.ps',
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>Click Here</h1>
        </button>
        <br></br>
      </div>
    );
  }
}
export default Goha;
