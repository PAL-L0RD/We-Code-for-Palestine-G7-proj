import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { topic, explane } from "../store";
import TablePagination from "@material-ui/core/TablePagination";

import Grid from "@material-ui/core/Grid";

import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(160),
      height: theme.spacing(160),
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  const Hello = topic.map((title) => (
      <Grid xs='6' item>
    <Card style={{padding:10 , margin:20}}>
      <Typography variant="h4">{title}</Typography>{" "}
      {explane.map((explane) => (
        <Typography variant="p">{explane}</Typography>
      ))}
    </Card>
    </Grid>
  ));
  return (
    <Fragment className={classes.root}>
      <Grid spacing={1} container>
       
          {Hello}
 
      </Grid>
    </Fragment>
  );
}
