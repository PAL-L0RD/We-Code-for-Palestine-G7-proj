import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Footeritems from './footeritems';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Amro_Footer.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Im1 from './CFP-removebg-preview.png';
import Paltel from './Paltel-removebg-preview.png';

function Amro_footer() {
  return (
    <div className="main">
      <footer>
        <Divider className="divider" />
        <Grid container direction="row" xs={12}>
          <Grid item xs={0} sm={4}>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <div className="image">
                <img className="img" src={Im1} />
              </div>
            </Box>
          </Grid>
          <Grid item sm={4} xs={12}>
            {/* <List component="nav" aria-label="footer-0" className="mid">
              <ListItem button className="mid">
                <Link to="/about-us"> Feedback</Link>
              </ListItem>
              <ListItem className="mid" button>
                <Link to="/about-us"> Contact-us</Link>
              </ListItem>
              <ListItem className="mid" button>
                <Link to="/about-us"> Admission Dates</Link>
              </ListItem>
              <ListItem className="mid" button>
                <Link to="/about-us">
                  <Typography className="footeritemas" varient="h2">
                    Pictures and videos
                  </Typography>
                </Link>
              </ListItem>
            </List> */}
            <Footeritems />
          </Grid>
          <Grid item xs={12} sm={4} className="mid">
            <Typography className="Sponsor" varient="h2">
              {'Sponser:'}
            </Typography>
            <img className="image" src={Paltel} />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
export default Amro_footer;
