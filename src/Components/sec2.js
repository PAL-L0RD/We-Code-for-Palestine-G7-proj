import React from 'react';
import Noob from './links1';
import Cardtest from './cardtest';

class Amro extends React.Component {
  render() {
    return (
      <favorite>
        <Noob
          thename="Youtube"
          thelink="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
        />
        <Noob
          thename="Reddit"
          thelink="https://marketingland.com/wp-content/ml-loads/2014/07/reddit-combo-1920-800x450.png"
        />
        <Noob
          thename="Reddit"
          thelink="https://marketingland.com/wp-content/ml-loads/2014/07/reddit-combo-1920-800x450.png"
        />
        <Cardtest />
      </favorite>
    );
  }
}
export default Amro;
