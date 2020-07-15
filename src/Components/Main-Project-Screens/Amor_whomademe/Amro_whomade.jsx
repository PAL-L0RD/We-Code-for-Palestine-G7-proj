import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import Who from './Card2';
import './Amro_who.css';
const Amro_Who = (props) => {
  return (
    <Fragment className="limit">
      <img
        className="ima1"
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Grid container direction="row">
        <Grid item xs={0} sm={1} />
        <Grid item container direction="row" xs={12} sm={10}>
          <Grid className="card1" item xs={12} sm={3}>
            <Who
              alttext={''}
              imagelink="https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/89355461_2609583529362235_4035750931466289152_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=yZ5-aeaiuKQAX8NJ65I&_nc_ht=scontent.fjrs4-1.fna&oh=dea26627392e4669fc9e95fa195ca2d8&oe=5F3316E3"
              title="Amro Abou-Hachem"
              maintext="Hey Everyone,
              I am Amro, I am a student at the Greek Catholic school. I want to study physics in the university. 
              I love Palestine, physics and mathematics."
              linktext={'Check my Linked-In'}
              navlink={'https://www.linkedin.com/in/amroabouhachem/'}
            />
          </Grid>

          <Grid className="card1" item xs={12} sm={3}>
            <Who
              alttext={''}
              imagelink="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Year two"
              maintext="In year one students learn the fundementals of prgramming and Humnan Centered Design and apply their skills in making their first own game using Python-Turtle-."
            />
          </Grid>

          <Grid className="card1" item xs={12} sm={3}>
            <Who
              alttext={''}
              imagelink="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Year three"
              maintext="In year one students learn the fundementals of prgramming and Humnan Centered Design and apply their skills in making their first own game using Python-Turtle-."
              navlink="/prev/y3"
            />
          </Grid>
          <Grid className="card1" item xs={12} sm={3}>
            <Who
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
};

export default Amro_Who;
