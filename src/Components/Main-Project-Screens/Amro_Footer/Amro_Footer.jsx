import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import './Amro_Footer.css';
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
              <h2>love</h2>
            </div>
            <h2>love</h2>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" className="talk">
              damns
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <h1>hey</h1>
          </Grid>
          <Grid item xs={3}>
            <h1>hey</h1>
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
}
export default Amro_footer;
