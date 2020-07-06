import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'start',
    textAlign: 'center',
  },
}));
class stupid extends React.Component {
  render() {
    return (
      <div>
        <a onclick="return false" href={this.props.link7}>
          {this.props.name7}
        </a>
      </div>
    );
  }
}
export default stupid;
