import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '40%',
    justifyContent: 'start',
    alignItems: 'start',
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
      </div>
    </div>
  );
}
