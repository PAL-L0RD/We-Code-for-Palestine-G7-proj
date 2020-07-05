import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MainMen from './MainMen';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Learn7 from '../learningflex';

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
    marginTop: '20px',
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
function MainBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Router>
          <Switch>
            <ul>
              <li>
                <Link to="/Flex">Flextest</Link>
              </li>
            </ul>
          </Switch>
          <Route exact path="/Flex" component={Learn7} />
        </Router>
        <Toolbar>
          <MainMen />
          <Typography variant="h6" className={classes.title}>
            <img
              className={classes.logo}
              alt={''}
              src={require('./logo1.jpg')}
            />
            Code For Palestine!
          </Typography>
          <Button color="inherit"></Button>
          <Button color="inherit">Sign-up</Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
  );
}
export default MainBar;
