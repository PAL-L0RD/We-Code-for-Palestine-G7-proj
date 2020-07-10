import React from 'react';
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
class Amro_Female_Male_distribution extends React.Component {
  state = {
    chartImageURI: '',
  };
  constructor() {
    super();
    this.state = {
      Genders: '',
      Males: '',
      Females: '',
    };
  }
  componentDidMount() {
    db.collection('Gender_distribution')
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ Genders: data });
        console.info(data);
        Object.values(this.state.Genders).map((product) =>
          this.setState({ Males: product.Males })
        );
        Object.values(this.state.Genders).map((product) =>
          this.setState({ Females: product.Females })
        );
      });
  }
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[
            ['Gender', 'Number of students'],
            ['Females', this.state.Females],
            ['Males', this.state.Males],
          ]}
          options={pieOptions}
          graph_id="PieChart-1"
          width={'100%'}
          height={'400px'}
        />
      </div>
    );
  }
}
export default Amro_Female_Male_distribution;
