import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import db from '../../../firebase';
import Amro_Columnchart_Annual_students from './Amro-Columnchart.jsx';
import Amro_School_distribution from './Amro-School_distribution_Piechart';
import Amro_Fe_Ma_dist from './Amro-Male-Female-piechart.jsx';
import Amro_Westbank_Gaza from './Amro-Westbank-Gaza.jsx';
const Amro_Components = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={0} sm={1} />
      <Grid item container direction="row" xs={12} sm={10}>
        <Grid item xs={0} sm={6}>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Amro_Columnchart_Annual_students />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Amro_Fe_Ma_dist />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Amro_School_distribution />
        </Grid>
        <Grid item xs={0} sm={6}>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Amro_Westbank_Gaza />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={0} sm={1} />
    </Grid>
  );
};
export default Amro_Components;
