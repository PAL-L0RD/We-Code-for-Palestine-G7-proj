import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Singnup'
import { auth } from './firebase'
import Signing from './Signing';
class App extends React.Component {
  constructor(){
    super()
    this.state={

    }

  }


  render() {
    return (
      
     <Signing />
    );
  }
}

export default App;
