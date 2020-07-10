import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { y1,y2 } from "../store";
import User from "./CFP User/App";
import ReactDOM from 'react-dom';

var x=0
class Hello extends Component {
  state = {
    open: false,
    chao: "",
  };
  click = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleChange = (name) => ({ target: { value } }) => {
      this.setState({
          chao: value,
        });
    };
    login = (props) => {
        y1.map((name) => {
            if (name === this.state.chao) {
                ReactDOM.render(
                    <React.StrictMode>
                      <User />
                    </React.StrictMode>,
                    document.getElementById('root')
                  );
                  
                  
                }
                if (name !== this.state.chao) {
                  y2.map((name) => {
                    if (name === this.state.chao) {
                        ReactDOM.render(
                            <React.StrictMode>
                              <User />
                            </React.StrictMode>,
                            document.getElementById('root')
                          );
                          
                          
                        }
                      
                       
                            
            });  
             
                 };
               
                    
    });
  };
  
  render() {
   
      return (
          <Fragment>
        <Button variant="contained" color="primary" onClick={this.click}>
          Login{" "}
        </Button>{" "}
        <Dialog
          aria-labelledby="form-dialog-title"
          open={this.state.open}
          onClose={this.click}
          >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your name here to get in
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your Name"
              type="text"
              onChange={this.handleChange("name")}
              fullWidth
              />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.login}>
              Login
            </Button>
            
          </DialogActions>
        </Dialog>
        
      </Fragment>
    );
 }  

}
export default Hello;

