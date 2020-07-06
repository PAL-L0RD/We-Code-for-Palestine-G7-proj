import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-google-charts';

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
class Testgraph extends React.Component {
  state = {
    chartImageURI: '',
  };
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[
            ['Girls', 'Boys'],
            ['Girls', 1000],
            ['Boys', 110],
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={'100%'}
          height={'400px'}
          legend_toggle
        />
      </div>
    );
  }
}
export default Testgraph;
