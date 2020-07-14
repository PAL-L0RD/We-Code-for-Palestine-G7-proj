import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Footeritems from './footeritems';
import Footeritems2 from './Amro_footer2';
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
        <Grid container direction="column">
          <Grid className="cl" container direction="row">
            <Grid className="logo" item xs={0} sm={4}>
              <Box display={{ xs: 'none', sm: 'block' }}>
                <Fragment>
                  <img className="img" src={Im1} />
                </Fragment>
              </Box>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Box display={{ xs: 'none', sm: 'block' }}>
                <Footeritems />
              </Box>
              <Box display={{ xs: 'block', sm: 'none' }}>
                <Footeritems2 />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="mid">
                {' '}
                <Typography className="Sponsor" varient="h2">
                  {'Sponser:'}
                </Typography>
              </Box>
              <img className="image" src={Paltel} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box xs={12} className="TRADEMARK">
              <Typography className="TRADEMARK_TEXT" varient="h2">
                Code For Palestine™
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
export default Amro_footer;
// Remove sponsor
//Add a link to Pltel Foundation and CODE X
