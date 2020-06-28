/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '100px',
    Height: '45px',
    marginRight: theme.spacing(3),
    display: 'block',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
    alignContent: 'right',
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Main() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Addmission Dates</MenuItem>
            <MenuItem onClick={handleClose}>Addmission Requirments</MenuItem>
            <MenuItem onClick={handleClose}>last</MenuItem>
          </Menu>
          <img
            className={classes.logo}
            alt={''}
            src={require('./Pictures/logo1.jpg')}
          />
          <Typography variant="h5" className={classes.title}>
            Code For Palestine!
          </Typography>

          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign-up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
