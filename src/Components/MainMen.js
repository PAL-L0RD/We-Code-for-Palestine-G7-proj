import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(5),
  },
}));
export default function Mainmen() {
  const classes = useStyles();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            {...bindTrigger(popupState)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Home</MenuItem>
            <MenuItem onClick={popupState.close}>Flexlearning</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
