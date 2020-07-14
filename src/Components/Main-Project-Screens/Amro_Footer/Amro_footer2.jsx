import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { red, green, lightGreen } from '@material-ui/core/colors';
import EventIcon from '@material-ui/icons/Event';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: lightGreen,
  },
}));

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className="footer2"
      >
        <Link to="about-us">
          <ListItem button>
            <ListItemIcon></ListItemIcon>

            <ListItemText primary="Contact Us"></ListItemText>
          </ListItem>
        </Link>
        <Link className="talk" to="about-us">
          <ListItem button>
            <ListItemIcon className="smaller"></ListItemIcon>

            <ListItemText primary="Questions"></ListItemText>
          </ListItem>
        </Link>
        <Link className="talk" to="about-us">
          <ListItem button>
            <ListItemIcon></ListItemIcon>

            <ListItemText primary="Admission Dates"></ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
