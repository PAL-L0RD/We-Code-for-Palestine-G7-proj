import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Amro_Previous_styles.css';
import { Link } from 'react-router-dom';
class Amro_Previous_Main_Card extends React.Component {
  render() {
    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={this.props.alttext}
            height="200"
            image={this.props.imagelink}
            title={this.props.imagetitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.maintext}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={this.props.navlink}> Check the projects</Link>
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default Amro_Previous_Main_Card;
