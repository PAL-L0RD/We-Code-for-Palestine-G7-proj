import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import Amro_Card from './Amro_Card';
import './Amro_Previous_styles.css';
class Amro_Previoud_Mainscreen extends React.Component {
  render() {
    return (
      <Fragment className="limit">
        <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Grid container direction="row">
          <Grid item xs={0} sm={1} />
          <Grid item container direction="row" xs={12} sm={10}>
            <Grid className="card1" item xs={12} sm={4}>
              <Amro_Card
                alttext={''}
                imagelink="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Year one"
                maintext="In year one students learn the fundementals of prgramming and Humnan Centered Design and apply their skills in making their first own game using Python-Turtle-."
              />
            </Grid>

            <Grid className="card1" item xs={12} sm={4}>
              <Amro_Card
                alttext={''}
                imagelink="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Year two"
                maintext="In year one students learn the fundementals of prgramming and Humnan Centered Design and apply their skills in making their first own game using Python-Turtle-."
              />
            </Grid>

            <Grid className="card1" item xs={12} sm={4}>
              <Amro_Card
                alttext={''}
                imagelink="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Year three"
                maintext="In year one students learn the fundementals of prgramming and Humnan Centered Design and apply their skills in making their first own game using Python-Turtle-."
                navlink="/prev/y3"
              />
            </Grid>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Fragment>
    );
  }
}
export default Amro_Previoud_Mainscreen;
