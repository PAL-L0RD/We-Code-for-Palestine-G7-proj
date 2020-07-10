import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
        <Link to={this.props.link7}> {this.props.name7}</Link>
      </div>
    );
  }
}
export default stupid;
