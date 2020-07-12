import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Amro_Footer.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Im1 from './CFP-removebg-preview.png';

function Amro_footer() {
  return (
    <div>
      <Fragment>
        <Divider className="divider" />
        <Grid className="mid" container direction="row" xs={12}>
          <Grid item xs={3} className="mid">
            <div className="mid">
              <img className="img" src={Im1} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItem button>
                <Link to="/about-us"> Feedback</Link>
              </ListItem>
              <ListItem button>
                <Link to="/about-us"> Contact-us</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <h1>Sponsers:</h1>
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
}
export default Amro_footer;
