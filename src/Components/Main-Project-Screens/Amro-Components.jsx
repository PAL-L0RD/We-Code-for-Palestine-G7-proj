import React from 'react';
import { Grid, formatMs } from '@material-ui/core';
import Amro_Columnchart from './Amro-Columnchart.jsx';
import Amro_Piechart from './Graphs.jsx';

const Amro_Components = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={0} sm={2} />
      <Grid item xs={12} sm={5}>
        <Amro_Columnchart />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Amro_Columnchart />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Amro_Piechart />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Amro_Piechart />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Amro_Piechart />
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
};
export default Amro_Components;
