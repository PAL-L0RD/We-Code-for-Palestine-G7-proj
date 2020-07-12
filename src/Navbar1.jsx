import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenItem from './Components/MenuItem.jsx';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'block',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    marginTop: '0px',
    marginRight: theme.spacing(5),
    heigtht: '30px',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 2,
    pool: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 200,
      marginTop: 0,
      backgroundColor: 'blue',
    },
    container: {
      justifyContent: 'center',
    },
  },
}));
function App3() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <IconButton
                  edge="start"
                  color="inherit"
                  className={classes.menuButton}
                  {...bindTrigger(popupState)}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="Home" link7="/" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="Flex" link7="/Flex" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="State 2" link7="/State2" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem thename="State test" thelink="/State" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="previous" link7="/prev" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="Amro Charts" link7="/Amro_charts" />
                  </MenuItem>

                  <MenuItem onClick={popupState.close}>
                    <MenItem name7="Amro Charts" link7="/Amro_charts" />
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <MenItem thename="thetask" thelink="/State" />
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Typography variant="h6" className={classes.title}>
            <Button>
              <Link to="/" color="inherit">
                <img
                  className={classes.logo}
                  alt={''}
                  src={require('./Components/logo1.jpg')}
                />
              </Link>
            </Button>
            Code For Palestine!
          </Typography>
          <Button color="inherit">
            <Link to="/signup" color="white">
              Sign-Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
  );
}
export default App3;
