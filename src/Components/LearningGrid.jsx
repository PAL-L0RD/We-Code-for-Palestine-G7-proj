import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Cardtest from './cardtest';
import Graphteset from './Graphing';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'start',
    textAlign: 'center',
  },
}));
const LearningGrids = () => {
  return (
    <Grid container>
      <Grid item xs={1} sm={2} />
      <Grid item xs={10} sm={3}>
        <Graphteset />
      </Grid>
      <Grid item xs={10} sm={3}>
        <Cardtest />
      </Grid>
      <Grid item xs={10} sm={3}>
        <Cardtest />
      </Grid>
      <Grid item xs={1} sm={2} />
    </Grid>
  );
};
export default LearningGrids;
