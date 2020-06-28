/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Bar1 from './Components/MainPage';
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
export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Bar1 />
      <div className={classes.wrapper}>
        <br></br>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            textAlign: 'center',
          }}
        >
          <h1 style={{ backgroundColor: '#3f51b5', color: 'white' }}>
            Welcome!
          </h1>
        </div>
        <div>
          <h1>This is for testing</h1>
        </div>
        <br></br>
        <h4>
          If you are here, good chances are you’re creative, passionate and
          clever. Code for Palestine was born in 2015 out of a desire to teach
          coding and entrepreneurial skills to some of the brightest high school
          students throughout the West Bank and Gaza Strip. The organization
          funding the initiative, the PalTel Group Foundation [PGF], recognized
          that there weren’t enough students graduating from Palestinian
          universities in STEM fields, and those that were graduating lacked
          some of the critical skills needed to succeed in the private sector.
          Most importantly, PGF saw an opportunity for a tech-driven startup
          scene to help tackle some of Palestine’s problems and realized that a
          culture of entrepreneurship needed to be bred in order for a startup
          culture to blossom. Code for Palestine is a three-year-long program,
          beginning the summer before 10th grade and concluding after 12th
          grade. Each year has many in-person sessions but is kicked off by a
          two-week camp held during the summer. Volunteer undergraduate
          instructors from Stanford University have served as the primary
          teachers during the two-week summer camp.
        </h4>
        <h2> I am testing for fun</h2>
      </div>
    </div>
  );
}
