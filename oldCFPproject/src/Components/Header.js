import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog  from "./Dialog";
const style = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      
    },
    appBarcolor: {
      main: "#11cb5f",
    },
  }));
  export default function ButtonAppBar() {
    const classes = style();
  
    return (
      <div className={classes.root} theme={style}>
        <AppBar
          position="static"
          color="#ddd"
          style={{ backgroundColor: "#91ff35" }}
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title} style={{color:"#fff" , fontWeight:'bold' } }>
              CFP 
            </Typography>
           <Dialog  />
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
