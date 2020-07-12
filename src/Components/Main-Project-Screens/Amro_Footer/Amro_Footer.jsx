import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';
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
                <Link to="/about-us">
                  <ListItemText primary="Trash" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link></Link>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <Link to="/about-us"> Contact us : </Link>
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
}
export default Amro_footer;
