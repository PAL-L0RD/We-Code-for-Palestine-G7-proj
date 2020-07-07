import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-google-charts';
import db from '../../firebase';
let color = '#4618ab';

// const data = [
//   ['Element', 'Number of Students enrolled', { role: 'style' }],
//   ['2015', this.state.y2015, 'x'], // RGB value
//   ['2016', 29, 'x'], // English color name
//   ['2017', 39, 'x'],
//   ['2018', 44, 'x'], // CSS-style declaration
//   ['2019', 51, 'x'],
//   ['2020', 59, 'x'],
// ];

class Amro_Columnchart extends React.Component {
  componentDidMount() {
    db.collection('AnuallNumbers')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ Years: data });
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2015: product.y2015 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2016: product.y2016 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2018: product.y2018 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2017: product.y2017 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2016: product.y2016 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2019: product.y2019 })
        );
        Object.values(this.state.Years).map((product) =>
          this.setState({ y2020: product.y2020 })
        );

        // var i;
        // var x;
        // for (i = 0; i < this.state.Years.length; i++) {
        //   x = 'y' + i;
        //   Object.values(this.state.Years).map((product) =>
        //     this.setState({ x: product.x })
        //   );
        // }
      });
  }
  constructor() {
    super();
    this.state = {
      Years: '',
      y2015: '',
      y2016: '',
      y2018: '',
      y2019: '',
      y2020: '',
    };
  }
  render() {
    const data = [
      ['Element', 'Number of Students enrolled', { role: 'style' }],
      ['2015', this.state.y2015, 'x'], // RGB value
      ['2016', this.state.y2016, 'x'], // English color name
      ['2017', this.state.y2017, 'x'],
      ['2018', this.state.y2018, 'x'], // CSS-style declaration
      ['2019', this.state.y2019, 'x'],
      ['2020', this.state.y2020, 'x'],
    ];
    return (
      <div className="App">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    );
  }
}
export default Amro_Columnchart;
