import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'start',
    textAlign: 'center',
  },
}));
export default function MenuItem() {
  const classes = useStyles();
  return (
    <div>
      <Link to={this.props.link5} color="inherit">
        {this.props.name5}
      </Link>
    </div>
  );
}
