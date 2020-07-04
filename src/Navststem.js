import Main from './App';
import Learn7 from './learningflex';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import React from 'react';
function App2() {
  return (
    <div>
      <Router>
        <Switch>
          <div>
            <ul>
              <li>
                {' '}
                <Link to="">MainPage</Link>
              </li>
            </ul>
            <ul>
              <li>
                {' '}
                <Link to="/Flex">Flextest</Link>
              </li>
            </ul>
            <Route exact path="/" component={Main} />
            <Route exact path="/Flex" component={Learn7} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App2;
