import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'react-google-charts';
import db from '../../../firebase';

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
      fontSize: 18,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  fontName: 'Roboto',
};
class School_distribution extends React.Component {
  state = {
    chartImageURI: '',
  };
  constructor() {
    super();
    this.state = {
      Schoolls: '',
      unr: '',
      Private_School: '',
      Public_School: '',
    };
  }
  componentDidMount() {
    db.collection('AnuallNumbers')
      .doc('School_dis')
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ unr: data['UN_SC'] });
        this.setState({ Private_School: data['PR_SC'] });
        this.setState({ Public_School: data['PU_SC'] });
      });
  }

  render() {
    return (
      <div className="App">
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['School type', 'Number of students'],
            ['UNRWA schools', this.state.unr],
            ['Private Schools', this.state.Private_School],
            ['Public Schools', this.state.Public_School],
          ]}
          options={{
            title: "Student's distribution based on their school type",
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
export default School_distribution;
