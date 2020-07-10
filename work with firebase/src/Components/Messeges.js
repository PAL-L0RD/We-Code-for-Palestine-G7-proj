import React, { Fragment } from 'react'
import db from '../firebase'
import Paper from './Print'
export default class Mess extends React.Component{
    constructor() {
        super(  );
        this.state = {
       text:[]
       
        };
        this.Data=this.Data.bind(this)
    }
     Data= ()=>db.map((name)=>{console.log(db.collection("team").doc(name[0]).get().then((doc) =>{
        const data=doc.data();
        var hello = this.state.text
        hello.push(data[name])
        this.setState({text:hello})
        return(data['name'])
    }))});
    render(){
        var a = [['Naeam','orange' , 'naeam133@gamil.com'] , ['Amro','red' , null  ] ,['Hadeel' ,'black', null] , ['Monya','red', null] , ['Sydney','yello', null]]
       function Db() {
          a.map(([name ,color , email])  => 
           db.collection("team").doc(name).set({
                name: name,
                email: email,
                favColor: color,
                address: "Palestine",
           }
           )
           
           ) 
           
        }
        function DbAll(){
            return(db.map((name)=>{console.log(db.collection("team").doc(name[0]).get().then((doc) =>{
    const data=doc.data();
    console.log(data['name'])
    
            }))}))
        }
    
        function DbOne(){
            return(db.collection("team")
            .doc("Naeam")
            .get()
            .then((doc) => {
                const data = doc.data()
                console.log("Favorite Color: " + data["favColor"])
            })
            )}
    const dad  = <Paper name="HEllo" />
    
        return(
            <Fragment>
                <button onClick={Db}>Hello world</button>
                <br />
                <button onClick={DbAll}>All</button>
                <br />
                <button onClick={DbOne}>One</button>
                <br />
    {this.Data}
            </Fragment>
    )}
}