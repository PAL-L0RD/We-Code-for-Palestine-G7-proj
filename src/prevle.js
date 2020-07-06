import React from 'react';
import db from './firebase.js';
import Printing from './Components/printing.jsx';
class Goha extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      data454: '',
      Password: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let arr = [];
    db.collection('Admins')
      .get()
      .then((querySnapshot) => {
        let data = {};
        querySnapshot.docs.map(function (doc) {
          data[doc.id] = doc.data();
          arr.push(data[doc.id]);
        });
        // const data = querySnapshot.docs.map((doc) => doc.data());
        //var arr = Object.entries(data);
        this.setState({ Name: arr });
        console.info(arr);
        // // const goi = Object.values(this.state.Name).forEach((product) =>
        // //   console.log(product.Fullname)
        // );
      });
  }
  handleTextChange() {
    db.collection('Admins')
      .doc('Amro')
      .get()
      .then((doc) => {
        const data = doc.data();
        // var arr = Object.values(data);
        // var arr = Object.entries(data);
        // // this.state.Name.push(arr);
        // // console.log(this.state.Name);
      });
  }
  handleSubmit() {
    // let arr = [];
    // db.collection('Admins')
    //   .get()
    //   .then((querySnapshot) => {
    //     let data = {};
    //     querySnapshot.docs.map(function (doc) {
    //       data[doc.id] = doc.data();
    //       arr.push(data[doc.id]);
    //     });
    //     // const data = querySnapshot.docs.map((doc) => doc.data());
    //     //var arr = Object.entries(data);
    //     this.setState({ Name: arr });
    //     console.info(arr);
    //     // // const goi = Object.values(this.state.Name).forEach((product) =>
    //     // //   console.log(product.Fullname)
    //     // );
    //   });
  }
  handleClick() {
    db.collection('Admins').doc('Amro').set({
      Fullname: 'Amro Abou-Hachem',
      email: 'amro@amro.ps',
      title: 'prof',
    });
  }
  render() {
    const goi = Object.values(this.state.Name).map((product) => (
      <Printing name1={product.Fullname} email1={product.email} />
    ));
    return (
      <div>
        <button onClick={this.handleClick}>
          <h1>Click Here</h1>
        </button>
        <br></br>
        <button onClick={this.handleSubmit}>
          <h1>Printing data the hole collection</h1>
        </button>
        <button onClick={this.handleTextChange}>
          <h1>Printing data in a doc</h1>
        </button>
        {goi}
        <h1></h1>
      </div>
    );
  }
}
export default Goha;
