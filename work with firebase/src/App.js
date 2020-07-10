import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import How from './Components/HowtoJoin'
import Who from './Components/Whomademe'
import Nav from './Components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className='App-header'>
    <Fragment >
      <Nav />
    

      <Router>
        <center>
        <Switch>
          <Route exact path='/Home' component={Home} />

          <Route path="/HowToJoin" component={() => <How url={"http://www.codeforpalestine.ps"} />} />
          <Route path="/WhoMadeME" component={() => <Fragment>

            <Who name='Naim' />
            <Who name='Amro' />
            <Who name='Monya' />
            <Who name='Hadeel' />
          </Fragment>} />
        </Switch>
        </center>
      </Router>

    </Fragment>
    </div>
    );

}

export default App;




// var firebaseConfig = {
//   apiKey: "AIzaSyBOFNQsjqeIPYKu88U7y22uAVDpCKYe8sk",
//   authDomain: "code-for-palestine-messeges.firebaseapp.com",
//   databaseURL: "https://code-for-palestine-messeges.firebaseio.com",
//   projectId: "code-for-palestine-messeges",
//   storageBucket: "code-for-palestine-messeges.appspot.com",
//   messagingSenderId: "121281191547",
//   appId: "1:121281191547:web:ee491a648458f6ad20ccde"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);