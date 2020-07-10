import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles({
  root: {
    width: 1000,
    backgroundColor:"#dadada",
    borderRadius:50,
    
  },
});

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <center>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} backgroundcolor="red">
      <a href='/Home'><BottomNavigationAction label="Recents" value="recents" icon={<HomeIcon />} /></a>
      <a href='/HowToJoin'><BottomNavigationAction label="Favorites" value="favorites" icon={<AddIcon />} /></a>
      <a href='/WhoMadeMe'><BottomNavigationAction label="Nearby" value="nearby" icon={<InfoIcon />} /></a>
      
    </BottomNavigation>
    </center>
  );
}