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
import Main from './App';
import Learn7 from './learningflex';
import MenItem from './Components/MenuItem.jsx';
import State8 from './Components/sec2';
import sign8 from './Components/SignUp';
import learn8 from './prevle';
import LearningGrids from './Components/LearningGrid.jsx';
import Amro_charts from './Components/Main-Project-Screens/Amro_Chart_Mainscreen/Amro-Components.jsx';
import previous_yeras from './Components/Main-Project-Screens/Previous_Years_Projects/Amro_Previous_years';
import y3_projects from './Components/Main-Project-Screens/Previous_Years_Projects/Amro_Y3_project';
import Footer1 from './Components/Main-Project-Screens/Amro_Footer/Amro_Footer';
import Bar from './Navbar1';

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
function App2() {
  const classes = useStyles();
  return (
    <Fragment>
      <Router>
        <Bar />
        <Switch></Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Flex" component={Learn7} />
        <Route exact path="/state" component={learn8} />
        <Route exact path="/State2" component={LearningGrids} />
        <Route exact path="/Amro_charts" component={Amro_charts} />
        <Route exact path="/signup" component={sign8} />
        <Route exact path="/prev" component={previous_yeras} />
        <Route exact path="/prev/y3" component={y3_projects} />
        <Route exact path="/about-us" component={State8} />
        <Footer1 />
      </Router>
    </Fragment>
  );
}
export default App2;
