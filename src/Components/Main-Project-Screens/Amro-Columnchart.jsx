import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-google-charts';

const data = [
  ['Element', 'Number of Students enrolled in', { role: 'style' }],
  ['2015', 8.94, '#b87333'], // RGB value
  ['2016', 10.49, 'silver'], // English color name
  ['2017', 19.3, 'gold'],
  ['2018', 21.45, 'color: #e5e4e2'], // CSS-style declaration
  ['2019', 19.3, 'gold'],
  ['2020', 19.3, 'gold'],
  ['2021', 19.3, 'gold'],
];
class App extends React.Component {
  render() {
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
