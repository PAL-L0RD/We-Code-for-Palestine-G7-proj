import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state ={
      log:false
    }
  
       wow = () => {
      this.setState({log: !this.state.log})
        
      }
  render(){
  const it= this.state.log ? 'in' :'out'
  
  return (
    <div className="App">
      <h1>Log{it}</h1>
      <button onClick={this.wow}>HEllo</button>
    </div>
  );
}}

export default App;
