import React from 'react';
import Chart from 'react-google-charts';
import db from '../../firebase';
const pieOptions = {
  title: '',
  pieHole: 0.6,
  slices: [
    {
      color: '#2BB673',
    },
    {
      color: '#d91e48',
    },
    {
      color: '#007fad',
    },
    {
      color: '#e9a227',
    },
  ],
  legend: {
    position: 'bottom',
    alignment: 'center',
    textStyle: {
      color: '233238',
      fontSize: 20,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '80%',
  },
  fontName: 'Roboto',
};
class Amro_Geo_distribution extends React.Component {
  state = {
    chartImageURI: '',
  };
  constructor() {
    super();
    this.state = {
      Name: '',
      Gaza: '',
      Westbank: '',
    };
  }
  componentDidMount() {
    db.collection("Students's Geographical Distribution")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ Name: data });
        Object.values(this.state.Name).map((product) =>
          this.setState({ Gaza: product.Gaza })
        );
        Object.values(this.state.Name).map((product) =>
          this.setState({ Westbank: product.Westbank })
        );
      });
  }
  render() {
    var x = this.state.Gaza * 1;
    var y = this.state.Westbank * 1;

    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[
            ['Geographical Location', 'Number of Students'],
            ['Gaza', x],
            ['Westbank', y],
          ]}
          options={pieOptions}
          graph_id="PieChart-2"
          width={'100%'}
          height={'400px'}
        />
      </div>
    );
  }
}
export default Amro_Geo_distribution;
