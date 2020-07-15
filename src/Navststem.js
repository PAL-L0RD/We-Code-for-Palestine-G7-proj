import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
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
import Feed from './Components/Main-Project-Screens/Amro_Feedback/Amro_Feedback';
import Who from './Components/Main-Project-Screens/Amor_whomademe/Amro_whomade';

function App2() {
  return (
    <Fragment>
      <Router>
        <Bar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Flex" component={Learn7} />
          <Route exact path="/state" component={learn8} />
          <Route exact path="/State2" component={LearningGrids} />
          <Route exact path="/Amro_charts" component={Amro_charts} />
          <Route exact path="/signup" component={sign8} />
          <Route exact path="/prev" component={previous_yeras} />
          <Route exact path="/prev/y3" component={y3_projects} />
          <Route exact path="/about-us" component={State8} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/who" component={Who} />
        </Switch>
        <Footer1 />
      </Router>
    </Fragment>
  );
}
export default App2;
