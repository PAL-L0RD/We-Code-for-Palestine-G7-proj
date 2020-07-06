import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '40%',
    justifyContent: 'end',
    alignItems: 'center',
    textAlign: 'center',
  },
}));
export default function Learningflex() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <h1> Hey1</h1>
        <h1> Hey2</h1>
        <h1> Hey3</h1>
        <h1> Hey4</h1>
        <h1> Hey5</h1>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <cardtest />
          </Grid>
          <Grid item xs={12} sm={4}>
            <cardtest />
          </Grid>
          <Grid item xs={12} sm={4}>
            <cardtest />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
