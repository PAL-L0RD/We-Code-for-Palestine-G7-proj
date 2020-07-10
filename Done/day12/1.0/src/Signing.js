import React from 'react'
import {firebase, auth } from './firebase'
import Home from './Home'
import Login from './Login'
import Signup from './Singnup'
import { BrowserRouter as Router, Route, Link, Switch , Redirect } from 'react-router-dom';
export default class Signing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:''
        }
    }


    //----------------------------------
    Login(event){
        event.preventDefault();
       auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
            alert(res)
        }).catch((err)=>{
            console.log(err);
        })
    }
    //------------------------------------
    authListener() {
        firebase.auth().onAuthStateChanged((user) =>{
          if(user) {
            this.setState({user})
          }
          else {
            this.setState({user: null})
          }
        })
      }
    

    render(){
        return(
            <div>
               <Router>
          <Switch>
            <Route exact path="/" component={this.state.user ? Home : Signup}/>
            {this.state.user ?  '' : <Route path="/login" component={Login}/>}
            {(window.location.pathname === "/login" && this.state.user)  && <Redirect to="/"/>}
          </Switch>
        </Router>

                {this.state.user!=null ?'':<Home />}
            </div>
    
    )
}

}
{/*                
            <Router>
              <Switch>
                  
                <Route exact path="/" component={this.state.user ? Home : Signup }/>
                {this.state.user ?  '' : <Route path="/login" component={Login}/>}
                {(window.location.pathname === "/login" && this.state.user)  && <Redirect to="/"/>}
              </Switch>
            </Router> */}